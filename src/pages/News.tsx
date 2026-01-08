import { Layout } from "@/components/layout/Layout";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import womenTrainingImage from "@/assets/women-training.jpg";
import farmerCropsImage from "@/assets/farmer-crops.jpg";
import ruralVillageImage from "@/assets/rural-village.jpg";

const newsItems = [
  {
    id: 1,
    title: "Rural Agro Foundation Launches Climate-Smart Agriculture Program in Rajshahi",
    excerpt: "A new initiative targeting 5,000 farmers with drought-resistant techniques and early warning systems to combat climate challenges.",
    date: "December 15, 2024",
    category: "Program Launch",
    image: farmerCropsImage,
    featured: true,
  },
  {
    id: 2,
    title: "Women Farmer Groups Report 40% Income Increase",
    excerpt: "Our women empowerment program shows remarkable results as participants gain market access and financial skills.",
    date: "November 28, 2024",
    category: "Impact Report",
    image: womenTrainingImage,
    featured: false,
  },
  {
    id: 3,
    title: "Partnership Announcement: Collaboration with UN FAO",
    excerpt: "Rural Agro Foundation joins forces with FAO to scale sustainable agriculture training across Bangladesh.",
    date: "November 10, 2024",
    category: "Partnership",
    image: ruralVillageImage,
    featured: false,
  },
  {
    id: 4,
    title: "Annual Impact Report 2024 Released",
    excerpt: "Our comprehensive report details the achievements, challenges, and learnings from the past year of programming.",
    date: "October 25, 2024",
    category: "Report",
    image: farmerCropsImage,
    featured: false,
  },
  {
    id: 5,
    title: "Community Seed Bank Established in Mymensingh",
    excerpt: "Local farmers now have access to climate-resilient seed varieties through our new community-managed seed bank.",
    date: "October 5, 2024",
    category: "Program Update",
    image: womenTrainingImage,
    featured: false,
  },
];

const News = () => {
  const featuredNews = newsItems.find((item) => item.featured);
  const otherNews = newsItems.filter((item) => !item.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-serif">
              News & Updates
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Stay informed about our programs, impact stories, and the latest developments from the field.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredNews && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="rounded-2xl w-full h-80 object-cover shadow-lg"
              />
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Tag className="w-3 h-3" />
                    {featuredNews.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {featuredNews.date}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-serif">
                  {featuredNews.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {featuredNews.excerpt}
                </p>
                <Button variant="default" size="lg" className="gap-2">
                  Read Full Story
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherNews.map((item) => (
              <article
                key={item.id}
                className="bg-background rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                      {item.category}
                    </span>
                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:underline"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Stay Connected
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Subscribe to receive updates on our programs, impact stories, and opportunities to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary flex-1 max-w-md"
              />
              <Button variant="default" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
