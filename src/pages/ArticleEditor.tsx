import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAuth } from '@/hooks/useAuth';
import { useArticles, ArticleFormData, Article } from '@/hooks/useArticles';
import { ArrowLeft, Save, Eye, Loader2 } from 'lucide-react';

const categories = [
  'news',
  'Program Launch',
  'Impact Report',
  'Partnership',
  'Report',
  'Program Update',
  'Event',
  'Announcement',
];

const ArticleEditor = () => {
  const { id } = useParams<{ id: string }>();
  const isNew = id === 'new';
  const { user, isLoading: authLoading } = useAuth();
  const { createArticle, updateArticle, getArticleById } = useArticles();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(!isNew);
  const [isSaving, setIsSaving] = useState(false);
  const [article, setArticle] = useState<Article | null>(null);
  
  const [formData, setFormData] = useState<ArticleFormData>({
    title: '',
    excerpt: '',
    content: '',
    featured_image: '',
    category: 'news',
    status: 'draft',
    author_name: 'Rural Agro Foundation',
  });

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    const loadArticle = async () => {
      if (!isNew && id) {
        const data = await getArticleById(id);
        if (data) {
          setArticle(data);
          setFormData({
            title: data.title,
            excerpt: data.excerpt || '',
            content: data.content,
            featured_image: data.featured_image || '',
            category: data.category || 'news',
            status: data.status,
            author_name: data.author_name,
          });
        }
        setIsLoading(false);
      }
    };

    if (user && !isNew) {
      loadArticle();
    }
  }, [user, id, isNew]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (status: 'draft' | 'published') => {
    if (!formData.title.trim() || !formData.content.trim()) {
      return;
    }

    setIsSaving(true);
    const dataToSave = { ...formData, status };

    let success = false;
    if (isNew) {
      const newArticle = await createArticle(dataToSave);
      success = !!newArticle;
    } else if (id) {
      success = await updateArticle(id, dataToSave);
    }

    setIsSaving(false);

    if (success) {
      navigate('/admin');
    }
  };

  if (authLoading || isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <Layout>
      <section className="py-8 md:py-12 bg-muted min-h-[80vh]">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/admin">
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground font-serif">
                  {isNew ? 'Create New Article' : 'Edit Article'}
                </h1>
                <p className="text-muted-foreground">
                  {isNew ? 'Write and publish a new article' : 'Update your article'}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => handleSave('draft')}
                disabled={isSaving || !formData.title.trim() || !formData.content.trim()}
              >
                {isSaving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
                Save Draft
              </Button>
              <Button
                onClick={() => handleSave('published')}
                disabled={isSaving || !formData.title.trim() || !formData.content.trim()}
              >
                {isSaving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                Publish
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Article Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="Enter article title..."
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      name="excerpt"
                      placeholder="Brief summary of the article..."
                      value={formData.excerpt}
                      onChange={handleChange}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Content *</Label>
                    <Textarea
                      id="content"
                      name="content"
                      placeholder="Write your article content here..."
                      value={formData.content}
                      onChange={handleChange}
                      rows={15}
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      You can use basic text formatting. HTML tags are supported.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Article Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => handleSelectChange('category', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="author_name">Author Name</Label>
                    <Input
                      id="author_name"
                      name="author_name"
                      placeholder="Author name"
                      value={formData.author_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="featured_image">Featured Image URL</Label>
                    <Input
                      id="featured_image"
                      name="featured_image"
                      placeholder="https://example.com/image.jpg"
                      value={formData.featured_image}
                      onChange={handleChange}
                    />
                    {formData.featured_image && (
                      <img
                        src={formData.featured_image}
                        alt="Preview"
                        className="w-full h-32 object-cover rounded-lg mt-2"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    )}
                  </div>

                  {!isNew && article && (
                    <div className="pt-4 border-t border-border space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Status:</span>
                        <span className="capitalize">{article.status}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Created:</span>
                        <span>{new Date(article.created_at).toLocaleDateString()}</span>
                      </div>
                      {article.published_at && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Published:</span>
                          <span>{new Date(article.published_at).toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArticleEditor;
