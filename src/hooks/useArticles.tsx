import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  category: string | null;
  status: 'draft' | 'published' | 'archived';
  author_name: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface ArticleFormData {
  title: string;
  excerpt?: string;
  content: string;
  featured_image?: string;
  category?: string;
  status: 'draft' | 'published' | 'archived';
  author_name?: string;
}

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchArticles = async (publishedOnly = false) => {
    setIsLoading(true);
    try {
      let query = supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (publishedOnly) {
        query = query.eq('status', 'published');
      }

      const { data, error } = await query;

      if (error) throw error;
      setArticles(data as Article[] || []);
    } catch (error: any) {
      console.error('Error fetching articles:', error);
      toast({
        title: 'Error',
        description: 'Failed to load articles',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getArticleBySlug = async (slug: string): Promise<Article | null> => {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .maybeSingle();

    if (error) {
      console.error('Error fetching article:', error);
      return null;
    }
    return data as Article | null;
  };

  const getArticleById = async (id: string): Promise<Article | null> => {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('Error fetching article:', error);
      return null;
    }
    return data as Article | null;
  };

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const createArticle = async (formData: ArticleFormData): Promise<Article | null> => {
    try {
      const slug = generateSlug(formData.title) + '-' + Date.now();
      const publishedAt = formData.status === 'published' ? new Date().toISOString() : null;

      const { data, error } = await supabase
        .from('articles')
        .insert({
          title: formData.title,
          slug,
          excerpt: formData.excerpt || null,
          content: formData.content,
          featured_image: formData.featured_image || null,
          category: formData.category || 'news',
          status: formData.status,
          author_name: formData.author_name || 'Rural Agro Foundation',
          published_at: publishedAt,
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Article created successfully',
      });

      return data as Article;
    } catch (error: any) {
      console.error('Error creating article:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to create article',
        variant: 'destructive',
      });
      return null;
    }
  };

  const updateArticle = async (id: string, formData: Partial<ArticleFormData>): Promise<boolean> => {
    try {
      const updateData: any = { ...formData };
      
      if (formData.title) {
        updateData.slug = generateSlug(formData.title) + '-' + Date.now();
      }
      
      if (formData.status === 'published') {
        updateData.published_at = new Date().toISOString();
      }

      const { error } = await supabase
        .from('articles')
        .update(updateData)
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Article updated successfully',
      });

      return true;
    } catch (error: any) {
      console.error('Error updating article:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to update article',
        variant: 'destructive',
      });
      return false;
    }
  };

  const deleteArticle = async (id: string): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Article deleted successfully',
      });

      return true;
    } catch (error: any) {
      console.error('Error deleting article:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to delete article',
        variant: 'destructive',
      });
      return false;
    }
  };

  return {
    articles,
    isLoading,
    fetchArticles,
    getArticleBySlug,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle,
  };
};
