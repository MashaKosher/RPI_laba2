import i18n from "i18next";
import {initReactI18next} from "react-i18next";


const resources = {
    debug: true,
    en: {
        translation: {
            main: "Main",
            list: "List",
            about: "About site",
            lang: "Lang",
            aboutInfo: "This portal contains information about the Romanov royal family. The main page contains information about the figure of the day and a description of the portal development team. The portal also contains a personal page for each character. Each page contains a description of the figure: biography, photo gallery with his images, YouTube video about the figure, place his birth on the map.",
            btnInfo: "Information",
            gal: "Gallery",
            life: "Life",
            death: "Death",
            birth: "Birth",
            map: "Map",
            video: "Video",

            death0: "On the night of July 16-17, 1918, Nikolai and his family were shot by the Bolsheviks in Yekaterinburg. In 2000, the Russian Orthodox Church canonized them as holy martyrs.",
            death1: "He was killed by the Bolsheviks on the night of July 12-13, 1918 in Perm. In 1991, Mikhail Alexandrovich was canonized as a holy martyr of the Russian Orthodox Church",
            death2: "Together with her family, she was shot by the Bolsheviks on the night of July 16-17, 1918 in Yekaterinburg",
            death3: "Together with his family, she was shot by the Bolsheviks on the night of July 16-17, 1918 in Yekaterinburg",
            death4: "Together with her family, she was shot by the Bolsheviks on the night of July 16-17, 1918 in Yekaterinburg",

            birth0: "Nicholas 2 is the eldest son of Emperor Alexander 3 and Empress Maria Feodorovna. Born in Tsarskoye Selo in 1868",
            birth1: "Grand Duke Mikhail Alexandrovich was born on November 22, 1878 in St. Petersburg in the Anichkov Palace, the fourth son of Alexander 3, the younger brother of Nicholas 2",
            birth2: "Alexandra Feodorovna (nee Princess Victoria Alice Elena Louise Beatrice of Hesse-Darmstadt) is the fourth daughter of the Grand Duke of Hesse and the Rhine, Ludwig IV, and Duchess Alice, daughter of the British Queen Victoria. Born on July 6, 1872 in Darmstadt",
            birth3: "Alexander Nikolaevich Romanov was born on August 12, 1904 in Peterhof",
            birth4: "Born on November 15, 1895 in Tsarskoye Selo",

            life0: "Nicholas 2 (1868-1918) was the last Emperor of Russia. He was the son of Alexander 3 and Maria Fedorovna. Nicholas became emperor after the death of his father in 1894. During his reign, many events took place, such as the revolutions of 1905, World War I and the February Revolution of 1917. As a result of the last revolution, Nicholas was forced to abdicate the throne and was arrested along with his family",
            life1: "Mikhail Alexandrovich Romanov was the younger brother of Nicholas 2 and the third son of Alexander 3 and Maria Feodorovna. He was elected People's Commissar of Internal Affairs after the February Revolution of 1917, but refused the position. In May 1918 he was arrested and held in various prisons",
            life2: "In 1894, she married Nicholas 2, becoming Empress of Russia. They had five children: Olga, Tatiana, Maria, Anastasia and Alexei. Alexandra was known for her religious faith and strong influence on her husband. During World War I, she headed hospitals and helped wounded soldiers. However, her German roots and her religious beliefs caused mistrust among many Russians, which intensified after the 1917 Revolution",
            life3: "Alexey Nikolaevich Romanov is the only son of Nicholas II and Alexandra Fedorovna. He suffered from hemophilia, which led to frequent bleeding. During the First World War, he was evacuated along with his mother and sisters to Tobolsk. After the February Revolution of 1917, he was arrested along with the Tsar's family and sent to various places of detention",
            life4: "Grand Duchess, firstborn of Emperor Nicholas II and Empress Alexandra Feodorovna",

            name0: "Nikolay 2",
            description0: "The last emperor from the house of Romanov",
            name1: "Mikhail Alexandrovich",
            description1: "Brother of Nikolai 2",
            name2:  "Alexandra Fedorovna",
            description2: "Last Empress of Russia",
            name3: "Alexey Nikolaevich",
            description3: "Tsesarevich. The only son of Nicholas 2",
            name4: "Olga Nikolaevna",
            description4: "The eldest daughter of Nicholas 2"

        }
    },
    ru: {
        translation: {
            main: "Главная",
            list: "Список",
            about: "О портале",
            lang: "Язык",
            aboutInfo: "Данный портал содержит информацию о королевской семье романовых. На основной странице размещена информация одеятеле дня и описание команды разработчиков портала. Также портал содержит персональную страницукаждого персонажа. На каждой странице имеется описание деятеля: биография, фотогалерея с егоизображениями, видео на YouTube о деятеле, место его рождения на карте.",
            btnInfo: "Информация",
            gal: "Галерея",
            life: "Жизнь",
            death: "Смерть",
            birth: "Рождение",
            map: "Карта",
            video: "Видео",

            death0: "В ночь с 16 по 17 июля 1918 года Николай с семьей был растрелян большевиками в Екатеринбурге. В 2000 году Русская православная церковь причислила их к лику святых мучеников",
            death1: "Был убит большевиками в ночь с 12 на 13 июля 1918 года в Перми. В 1991 году Михаил Александрович был причислен к лику святых мучеников Российской православной церкви",
            death2: "Вместе с семьей была растреляна большевиками в ночь с 16 на 17 июля 1918 года в Екатеринбурге",
            death3: "Вместе с семьей был растрелян большевиками в ночь с 16 на 17 июля 1918 года в Екатеринбурге",
            death4: "Вместе с семьей была растреляна большевиками в ночь с 16 на 17 июля 1918 года в Екатеринбурге",

            birth0: "Николай 2 — старший сын императора Александра 3 и императрицы Марии Фёдоровны.Родился в царском селе в 1868 году",
            birth1: "Великий князь Михаил Александрович родился 22 ноября 1878 года в Санкт-Петербурге в Аничковом дворце, четвертый сын Александра 3, младший брат Николая 2",
            birth2: "Александра Фёдоровна (урождённая принцесса Виктория Алиса Елена Луиза Беатриса Гессен-Дармштадтская) — четвёртая дочь великого герцога Гессенского и Прирейнского Людвига IV и герцогини Алисы, дочери британской королевы Виктории. Родилась 6 июля 1872 года в Дармштадте",
            birth3: "Александр Николаевич Романов родился 12 августа 1904 года в Петергофе",
            birth4: "Родилась 15 ноября 1895 года в царском селе",


            life0: "Николай 2 был последним императором России. Он был сыном Александра 3 и Марии Федоровны. Николай стал императором после смерти своего отца в 1894 году. Во время его правления произошло множество событий, таких как революции 1905 года, Первая мировая война и Февральская революция 1917 года. В результате последней революции Николай был вынужден отречься от престола и был арестован вместе со своей семьей",
            life1: "Михаил Александрович Романов был младшим братом Николая 2 и третьим сыном Александра 3 и Марии Федоровны. Он был избран народным комиссаром внутренних дел после Февральской революции 1917 года, но отказался от должности. В мае 1918 года он был арестован и содержался в разных тюрьмах",
            life2: "В 1894 году она вышла замуж за Николая 2, став императрицей России. Они имели пять детей: Ольгу, Татьяну, Марию, Анастасию и Алексея. Александра была известна своей религиозной верой и сильным влиянием на мужа. Во время Первой мировой войны она возглавляла больницы и помогала раненым солдатам. Однако ее немецкие корни и ее религиозные убеждения вызывали недоверие у многих россиян, что усиливалось после Революции 1917 года",
            life3: "Алексей Николаевич Романов единственный сын Николая 2 и Александры Федоровны. Он страдал гемофилией, что приводило к частым кровотечениям. Во время Первой мировой войны он был эвакуирован вместе с матерью и сестрами в Тобольск. После Февральской революции 1917 года он был арестован вместе с семьей царя и отправлен в различные места заключения",
            life4: "Великая княжна Ольга Николаевна Романова была старшей дочерью Николая 2 и Александры Федоровны. Во время Первой мировой войны она работала медсестрой и помогала раненым. После Февральской революции 1917 года она была эвакуирована вместе с семьей царя в Сибирь, где они были арестованы большевиками",

            name0: "Николай 2",
            description0: "Последний император из дома романовых",
            name1: "Михаил Александрович",
            description1: "Родной брат Николая 2",
            name2:  "Александра Федоровна",
            description2: "Последняя императрица России",
            name3: "Алексей Николаевич",
            description3: "Цесаревич. Единственный сын Николая 2",
            name4: "Ольга Николаевна",
            description4: "Старшая дочь Николая 2"

        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ru", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;