import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Users",
      title: "Доступность",
      description:
        "Курсы для всех уровней — от новичков до экспертов. Никаких специальных знаний не требуется.",
      color: "text-blue-600",
    },
    {
      icon: "Wrench",
      title: "Практическое применение",
      description:
        "Работайте с реальными проектами и данными. Применяйте знания в своей сфере деятельности.",
      color: "text-green-600",
    },
    {
      icon: "Target",
      title: "Персонализация",
      description:
        "Индивидуальные траектории обучения, адаптированные под ваши цели и темп.",
      color: "text-blue-600",
    },
    {
      icon: "Award",
      title: "Сертификация",
      description:
        "Получайте признанные сертификаты и повышайте свою квалификацию на рынке труда.",
      color: "text-green-600",
    },
    {
      icon: "Users2",
      title: "Сообщество",
      description:
        "Общайтесь с единомышленниками, участвуйте в хакатонах и проектах.",
      color: "text-blue-600",
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description:
        "Наставники и эксперты всегда готовы помочь решить любые вопросы.",
      color: "text-green-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Почему выбирают <span className="text-gradient">нас</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создали платформу, которая делает изучение ИИ увлекательным,
            эффективным и доступным
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-6 ${feature.color}`}
                >
                  <Icon name={feature.icon as any} size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
