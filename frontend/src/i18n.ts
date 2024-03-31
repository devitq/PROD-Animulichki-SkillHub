import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      ru: {
        translation: {
        flag: "🇷🇺",
        langCode: "ru",
        home: "Главная",
        teams: "Команды",
        myTeams: "Мои команды",
        something: "Что-то",
        LightTheme: "Светлая",
        DarkTheme: "Темная",
        SystemTheme: "Тема устройства",
        entrance: "Вход",
        login: "Авторизация",
        registration: "Регистрация",
        loginHeader: "Введите адрес электронной почты и пароль, чтобы начать.",
        regHeader: "Введите юзернейм, почту и пароль, чтобы зарегистрироваться.",
        buttonLoginInSystem: "Войти в систему",
        buttonRegInSystemStep1: "Продолжить",
        buttonGoTOReg: "Приступить к регистрации!",
        landingLogo: "Убьем надежду!",

        }
      },
      en: {
        translation: {
            flag: "🇬🇧",
            langCode: "en",
            home: "Home",
            myTeams: "My Teams",
            Interests: "Interests",
            something: "Something",
            LightTheme: "Light",
            DarkTheme: "Dark",
            SystemTheme: "System Theme", 
            entrance: "Sign in",
            login: "Log in",
            registration: "Sign up",
            loginHeader: " Enter your email address and password to get started.",
            buttonLoginInSystem: "log in",
            buttonRegInSystemStep1: "Continue",
            buttonGoTOReg: "Proceed with registration!",
            landingLogo: "Let's kill hope!",

             }
      },
      zh: {
        translation: {
            flag: "🇨🇳",
            langCode: "zn",
            home: "家",
            teams: "团队",
            myTeams: "我的命令",
            something: "某物",
            LightTheme: "光",
            DarkTheme: "黑暗",
            SystemTheme: "系统主题",
            entrance: "登入您的帐户",
            login: "登录",
            registration: "登记注册",
            loginHeader: "请输入您的电子邮件地址和密码，开始更改.",
            buttonLoginInSystem: "登录系统",
            buttonRegInSystemStep1: "继续",
            buttonGoTOReg: "继续登记！",
            landingLogo: "让我们杀希望",


        }
      },
    }
  });

export default i18n;
