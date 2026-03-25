import { AlarmClock, MessageSquare, ChevronRight, ChartArea } from 'lucide-react';

const posts = [
  {
    id: 1,
    tag: 'NEW',
    image: 'HomePageImages/FeaturedPost1.jpg',
    title: "Loudest à la Madison #1 (L'Integral)",
    desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '22 April 2021',
    comments: '10 comments'
  },
  {
    id: 2,
    tag: 'NEW',
    image: 'HomePageImages/FeaturedPost2.jpg',
    title: "Loudest à la Madison #1 (L'Integral)",
    desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '22 April 2021',
    comments: '10 comments'
  },
  {
    id: 3,
    tag: 'NEW',
    image: 'HomePageImages/FeaturedPost3.jpg',
    title: "Loudest à la Madison #1 (L'Integral)",
    desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '22 April 2021',
    comments: '10 comments'
  }
];

const PostCard = ({ post }) => (
  <div className="flex flex-col bg-white overflow-hidden">
    {/* Image Container */}
    <div className="relative aspect-video lg:aspect-square overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover" 
      />
      <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm">
        {post.tag}
      </span>
    </div>

    {/* Content Section */}
    <div className="p-6 flex flex-col gap-3">
      {/* Category Tags */}
      <div className="flex gap-4 text-xs">
        <span className="text-blue-400">Google</span>
        <span className="text-slate-500">Trending</span>
        <span className="text-slate-500">New</span>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-medium text-slate-800 leading-snug">
        {post.title}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-slate-500 leading-relaxed">
        {post.desc}
      </p>

      {/* Meta Bar */}
      <div className="flex justify-between items-center py-4 border-b border-transparent">
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <AlarmClock size={16} className="text-blue-400" />
          {post.date}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <ChartArea  size={16} className="text-emerald-600" />
          {post.comments}
        </div>
      </div>

      {/* Action Link */}
      <button className="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-500 transition-colors w-fit pt-2">
        Learn More 
        <ChevronRight size={18} className="text-blue-400 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

export default function FeaturedPosts() {
  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-3">
          <h6 className="text-blue-500 font-bold text-sm">Practice Advice</h6>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Featured Products</h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm">
            Problems trying to resolve the conflict between the two major <br className="hidden md:block"/>
            realms of Classical physics: Newtonian mechanics.
          </p>
        </div>

        {/* Responsive Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
}