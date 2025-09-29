import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Search,
  Filter,
  Heart,
  Activity,
  Sparkles,
  Stethoscope,
  Microscope,
  Tag
} from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Barchasi', icon: Tag },
    { id: 'health', name: 'Sog\'liq', icon: Stethoscope },
    { id: 'fitness', name: 'Sport', icon: Activity },
    { id: 'beauty', name: 'Go\'zallik', icon: Sparkles },
    { id: 'laboratory', name: 'Laboratoriya', icon: Microscope }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Sog\'liqli ovqatlanish: 10 ta asosiy qoida',
      excerpt: 'Sog\'liqli ovqatlanish orqali sog\'lom bo\'lish va kasalliklardan himoyalanish uchun asosiy qoidalar...',
      content: 'Sog\'liqli ovqatlanish har bir inson uchun muhim. Bu maqolada siz sog\'liqli ovqatlanishning asosiy qoidalarini o\'rganasiz...',
      author: 'Dr. Malika Karimova',
      date: '2024-01-15',
      category: 'health',
      image: '/api/placeholder/400/250',
      readTime: '5 daqiqa',
      tags: ['sog\'liq', 'ovqatlanish', 'diet']
    },
    {
      id: 2,
      title: 'Yoga mashg\'ulotlarining foydalari',
      excerpt: 'Yoga mashg\'ulotlari nafaqat jismoniy, balki ruhiy sog\'liq uchun ham juda foydali...',
      content: 'Yoga - bu qadimiy hind falsafasi va mashq tizimi. Bu maqolada yoga mashg\'ulotlarining barcha afzalliklarini ko\'rib chiqamiz...',
      author: 'Dilnoza Toshmatova',
      date: '2024-01-12',
      category: 'fitness',
      image: '/api/placeholder/400/250',
      readTime: '7 daqiqa',
      tags: ['yoga', 'sport', 'sog\'lom turmush']
    },
    {
      id: 3,
      title: 'Terini parvarish qilish: qish mavsumi uchun maslahatlar',
      excerpt: 'Qish mavsumida terini to\'g\'ri parvarish qilish uchun maxsus maslahatlar va tavsiyalar...',
      content: 'Qish mavsumida teri qurib ketadi va maxsus parvarish talab qiladi. Bu maqolada qish mavsumi uchun terini parvarish qilish usullarini ko\'rib chiqamiz...',
      author: 'Oydin Mirzayeva',
      date: '2024-01-10',
      category: 'beauty',
      image: '/api/placeholder/400/250',
      readTime: '6 daqiqa',
      tags: ['teri parvarish', 'kosmetologiya', 'qish']
    },
    {
      id: 4,
      title: 'Qon tahlili natijalarini qanday tushunish kerak',
      excerpt: 'Qon tahlili natijalarini o\'qish va tushunish uchun asosiy ko\'rsatkichlar va ularning ma\'nolari...',
      content: 'Qon tahlili - bu sog\'liq holatini tekshirishning eng muhim usullaridan biri. Bu maqolada qon tahlili natijalarini qanday tushunish kerakligini ko\'rib chiqamiz...',
      author: 'Dr. Farida Abdullayeva',
      date: '2024-01-08',
      category: 'laboratory',
      image: '/api/placeholder/400/250',
      readTime: '8 daqiqa',
      tags: ['qon tahlili', 'laboratoriya', 'diagnostika']
    },
    {
      id: 5,
      title: 'Stressni boshqarish: 5 ta samarali usul',
      excerpt: 'Zamonaviy hayotda stressni boshqarish va ruhiy salomatlikni saqlash uchun samarali usullar...',
      content: 'Stress - bu zamonaviy hayotning ajralmas qismi. Bu maqolada stressni boshqarish va kamaytirish uchun samarali usullarni ko\'rib chiqamiz...',
      author: 'Dr. Malika Karimova',
      date: '2024-01-05',
      category: 'health',
      image: '/api/placeholder/400/250',
      readTime: '6 daqiqa',
      tags: ['stress', 'ruhiy salomatlik', 'psixologiya']
    },
    {
      id: 6,
      title: 'Fitness mashg\'ulotlarida xatoliklar',
      excerpt: 'Fitness mashg\'ulotlarida keng tarqalgan xatoliklar va ularni qanday oldini olish kerak...',
      content: 'Fitness mashg\'ulotlarida ko\'p odamlar xatoliklar qiladi. Bu maqolada eng keng tarqalgan xatoliklar va ularni qanday oldini olish kerakligini ko\'rib chiqamiz...',
      author: 'Dilnoza Toshmatova',
      date: '2024-01-03',
      category: 'fitness',
      image: '/api/placeholder/400/250',
      readTime: '5 daqiqa',
      tags: ['fitness', 'mashg\'ulot', 'xatoliklar']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 medical-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl mb-8 opacity-90">
              Sog'liq, sport, go'zallik va laboratoriya bo'yicha foydali maqolalar
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Maqolalarni qidiring..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tavsiya etilgan maqola</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="card hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Stethoscope className="w-8 h-8 text-primary-600" />
                    </div>
                    <p className="text-gray-600">Maqola rasmi</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString('uz-UZ')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900">{featuredPost.title}</h3>
                  <p className="text-gray-600">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{featuredPost.author}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="btn-primary flex items-center space-x-2">
                    <span>To'liq o'qish</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Barcha maqolalar</h2>
            <p className="text-xl text-gray-600">
              {filteredPosts.length} ta maqola topildi
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      {post.category === 'health' && <Stethoscope className="w-6 h-6 text-primary-600" />}
                      {post.category === 'fitness' && <Activity className="w-6 h-6 text-green-600" />}
                      {post.category === 'beauty' && <Sparkles className="w-6 h-6 text-pink-600" />}
                      {post.category === 'laboratory' && <Microscope className="w-6 h-6 text-blue-600" />}
                    </div>
                    <p className="text-gray-600 text-sm">Maqola rasmi</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('uz-UZ')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full text-primary-600 hover:text-primary-700 font-medium flex items-center justify-center space-x-2 group-hover:translate-x-1 transition-transform duration-200">
                    <span>O'qish</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maqola topilmadi</h3>
              <p className="text-gray-600">Qidiruv shartlaringizni o'zgartiring yoki boshqa kalit so'zlar bilan qidiring</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding medical-gradient">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Yangi maqolalardan xabardor bo'ling!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Eng so'nggi sog'liq, sport va go'zallik maslahatlarini email orqali oling
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Obuna bo'lish
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
