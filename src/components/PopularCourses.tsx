import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PopularCourses = () => {
  const courses = [
    {
      title: "Основы машинного обучения",
      description:
        "Изучите фундаментальные концепции ML, алгоритмы и их применение на практике.",
      level: "Начинающий",
      duration: "8 недель",
      price: "Бесплатно",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop",
      students: "12,430",
    },
    {
      title: "Нейронные сети и Deep Learning",
      description:
        "Глубокое погружение в архитектуры нейронных сетей и современные подходы.",
      level: "Продвинутый",
      duration: "12 недель",
      price: "4,990 ₽",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
      students: "8,750",
    },
    {
      title: "Computer Vision с Python",
      description:
        "Обработка изображений, распознавание объектов и создание приложений CV.",
      level: "Средний",
      duration: "10 недель",
      price: "3,490 ₽",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
      students: "6,280",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Популярные <span className="text-gradient">курсы</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Начните изучение ИИ с наших самых востребованных программ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {course.level}
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {course.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Icon name="Clock" size={16} className="mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Icon name="Users" size={16} className="mr-1" />
                    {course.students}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    {course.price}
                  </span>
                  <Button className="gradient-ai text-white">Подробнее</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8"
          >
            Посмотреть все курсы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
