import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Data Scientist в Сбербанке",
      content:
        "Благодаря курсам по машинному обучению смогла кардинально изменить карьеру. Материал подается очень доступно, а практические задания действительно готовят к реальной работе.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "Михаил Соколов",
      role: "ML-инженер в Яндексе",
      content:
        "Курс по нейронным сетям превзошел все ожидания. Преподаватели — настоящие эксперты, а сообщество очень активное и поддерживающее.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "Елена Васильева",
      role: "Product Manager в Mail.ru",
      content:
        "Изучение ИИ помогло мне лучше понимать возможности и ограничения технологий в продуктах. Рекомендую всем, кто работает с техническими командами.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Отзывы <span className="text-gradient">студентов</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Узнайте, как наши курсы изменили карьеру тысяч студентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
