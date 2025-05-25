
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230EA5E9" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Искусственный интеллект</span>
            <br />
            <span className="text-gray-800">для всех</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Изучайте ИИ от основ до продвинутого уровня. Практические курсы, 
            реальные проекты и персональная поддержка экспертов.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="gradient-ai text-white hover:opacity-90 transition-opacity px-8 py-4 text-lg font-semibold"
            >
              <Icon name="UserPlus" size={20} className="mr-2" />
              Зарегистрироваться бесплатно
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
            >
              <Icon name="BookOpen" size={20} className="mr-2" />
              Посмотреть курсы
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">Студентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">120+</div>
              <div className="text-gray-600">Курсов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Успешно завершают</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
