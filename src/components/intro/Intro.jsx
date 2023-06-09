import s from "./intro.module.scss";

const Intro = () => {
  return (
    <div className={s.intro}>
      <p className={s.paragraph}>
        Добро пожаловать на нашу страницу помощника бота! <br /> <br /> Наш
        бот-помощник - это чат-бот на базе искусственного интеллекта, который
        может помочь вам с подбором подходящего для вас курса. С помощью нашего бота вы можете
        быстро получать ответы на распространенные вопросы и получать
        персонализированные рекомендации.<br /> <br /> Наш бот разработан таким образом, чтобы быть простым в
        использовании и доступным из любого места. Просто введите свой вопрос
        или запрос, и наш бот сделает все возможное, чтобы предоставить вам
        полезный ответ. Наш бот постоянно учится и совершенствуется, поэтому,
        если у него нет ответа на ваш вопрос, он сделает все возможное, чтобы
        найти его или связать вас с экспертом-человеком, который может помочь.{" "}
        <br /> <br /> Мы постоянно работаем над улучшением нашего бота и добавлением
        новых функций, поэтому обязательно заходите почаще, чтобы узнать, что
        нового. Спасибо, что воспользовались нашим ботом-помощником!
      </p>
    </div>
  );
};

export default Intro;
