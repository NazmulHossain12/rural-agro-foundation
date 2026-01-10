import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useArticles, Article } from '@/hooks/useArticles';
import { ArrowLeft, Calendar, User, Tag, Loader2 } from 'lucide-react';
import { format } from 'date-fns';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getArticleBySlug } = useArticles();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadArticle = async () => {
      if (slug) {
        const data = await getArticleBySlug(slug);
        if (data) {
          setArticle(data);
        } else {
          setNotFound(true);
        }
        setIsLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (notFound || !article) {
    return (
      <Layout>
        <section className="py-16 md:py-24 bg-muted min-h-[60vh]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4 font-serif">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/news">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                <Tag className="w-3 h-3 mr-1" />
                {article.category}
              </Badge>
              <span className="flex items-center gap-1 text-primary-foreground/70 text-sm">
                <Calendar className="w-4 h-4" />
                {article.published_at
                  ? format(new Date(article.published_at), 'MMMM d, yyyy')
                  : format(new Date(article.created_at), 'MMMM d, yyyy')}
              </span>
              <span className="flex items-center gap-1 text-primary-foreground/70 text-sm">
                <User className="w-4 h-4" />
                {article.author_name}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground font-serif leading-tight">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="mt-6 text-xl text-primary-foreground/80">
                {article.excerpt}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {article.featured_image && (
        <section className="bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto -mt-8">
              <img
                src={article.featured_image}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article
              className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }}
            />
          </div>
        </div>
      </section>

      {/* Share / Navigation */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            <Button variant="outline" asChild>
              <Link to="/news">
                <ArrowLeft className="w-4 h-4 mr-2" />
                More News
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArticleDetail;
