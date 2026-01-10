import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useAuth } from '@/hooks/useAuth';
import { useArticles, Article } from '@/hooks/useArticles';
import { Plus, Edit, Trash2, Eye, LogOut, Loader2, FileText } from 'lucide-react';
import { format } from 'date-fns';

const Admin = () => {
  const { user, isLoading: authLoading, signOut } = useAuth();
  const { articles, isLoading: articlesLoading, fetchArticles, deleteArticle } = useArticles();
  const navigate = useNavigate();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchArticles(false); // Fetch all articles including drafts
    }
  }, [user]);

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    const success = await deleteArticle(id);
    if (success) {
      fetchArticles(false);
    }
    setDeletingId(null);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const getStatusBadge = (status: Article['status']) => {
    const variants: Record<Article['status'], 'default' | 'secondary' | 'outline'> = {
      published: 'default',
      draft: 'secondary',
      archived: 'outline',
    };
    return <Badge variant={variants[status]}>{status}</Badge>;
  };

  if (authLoading) {
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
            <div>
              <h1 className="text-3xl font-bold text-foreground font-serif">News Management</h1>
              <p className="text-muted-foreground">Create, edit, and publish news articles</p>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <Link to="/admin/articles/new">
                  <Plus className="w-4 h-4 mr-2" />
                  New Article
                </Link>
              </Button>
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Total Articles</CardDescription>
                <CardTitle className="text-3xl">{articles.length}</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Published</CardDescription>
                <CardTitle className="text-3xl text-primary">
                  {articles.filter((a) => a.status === 'published').length}
                </CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Drafts</CardDescription>
                <CardTitle className="text-3xl text-muted-foreground">
                  {articles.filter((a) => a.status === 'draft').length}
                </CardTitle>
              </CardHeader>
            </Card>
          </div>

          {/* Articles Table */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                All Articles
              </CardTitle>
            </CardHeader>
            <CardContent>
              {articlesLoading ? (
                <div className="flex justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : articles.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No articles yet</h3>
                  <p className="text-muted-foreground mb-4">Create your first article to get started</p>
                  <Button asChild>
                    <Link to="/admin/articles/new">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Article
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="min-w-[250px]">Title</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {articles.map((article) => (
                        <TableRow key={article.id}>
                          <TableCell className="font-medium">{article.title}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{article.category}</Badge>
                          </TableCell>
                          <TableCell>{getStatusBadge(article.status)}</TableCell>
                          <TableCell className="text-muted-foreground">
                            {format(new Date(article.created_at), 'MMM d, yyyy')}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              {article.status === 'published' && (
                                <Button variant="ghost" size="icon" asChild>
                                  <Link to={`/news/${article.slug}`}>
                                    <Eye className="w-4 h-4" />
                                  </Link>
                                </Button>
                              )}
                              <Button variant="ghost" size="icon" asChild>
                                <Link to={`/admin/articles/${article.id}`}>
                                  <Edit className="w-4 h-4" />
                                </Link>
                              </Button>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="ghost" size="icon" className="text-destructive">
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Delete Article</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Are you sure you want to delete "{article.title}"? This action cannot be undone.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() => handleDelete(article.id)}
                                      className="bg-destructive text-destructive-foreground"
                                      disabled={deletingId === article.id}
                                    >
                                      {deletingId === article.id ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                      ) : (
                                        'Delete'
                                      )}
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
