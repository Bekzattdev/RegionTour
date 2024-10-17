import { FC } from "react";
import { Typewriter } from "react-simple-typewriter";

export const TypeWriterText: FC = () => {
  const welcome: string[] = [
    "Welcome to the amazing Kyrgyzstan!",
    "Отдельное спасибо разработчикам",
    "Кыяз Ашималиев",
    "Абаз Токторбаев",
    "Бекзат Чолпонов",
    "Марсел Сатимбаев",
  ];

  return (
    <>
      <Typewriter
        words={welcome}
        loop={true}
        cursor={true}
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={10}
        delaySpeed={2700}
      />
    </>
  );
};
