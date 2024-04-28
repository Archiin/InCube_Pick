const youtubersData = [
    {
        name: "Арчин / Archin",
        qualities: ["mechanisms", "ponimanie"],
        gender: "male",
        charisma: ["smart", "calm", "talkative","thoughtful"],
        contentType: ["streams", "videos"],
        seasons: ["3"],
        activity: "high",
        content: ["builds", "reviews"],
        lore: ["human"],
        subscribers: "1000+",
        hardSkills: ["programmer", "3D"],
        time: "msk",
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/7QD-dJFOtEQ.jpg"
    },
    {
        name: "Virfi",
        gender: "male",
        charisma: ["calm", "thoughtful", "talkative"],
        contentType: ["videos"],
        seasons: ["2", "3"],
        activity: "mediumd",
        content: ["minecraftServers", "building"],
        lore: ["other"],
        subscribers: "больше 100",
        time: "msk",
        hardSkills: ["programmer", "3D", "artist"],
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/virfi.jpg"
    },
    {
        name: "ChepRXBrm_",
        gender: "male",
        charisma: ["calm", "excited", "talkative"],
        contentType: ["other"],
        seasons: ["2", "3"],
        activity: "high",
        content: ["nothing"],
        lore: ["other"],
        subscribers: "больше 100",
        qualities: ["mechanisms", "PVP"],
        time: "msk",
        hardSkills: ["artist"],
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/ChepRXBrm_.jpg"
    },
    {
        name: "Киборг",
        gender: "male",
        charisma: ["smart", "aggressive"],
        contentType: ["nothing"],
        seasons: ["1", "2", "3"],
        activity: "high",
        content: ["nothing"],
        lore: ["human"],
        subscribers: "больше 100",
        time: "msk",
        hardSkills: ["programmer"],
        qualities: ["mechanisms", "PVP"],
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/Киборг.jpg"
    },
    {
        name: "aristocrati",
        gender: "male",
        charisma: ["smart", "calm", "excited", "thoughtful", "aggressive", "talkative"],
        contentType: ["other"],
        seasons: ["2", "3"],
        activity: "low", // Изменено на "low"
        content: ["nothing"],
        lore: ["other"],
        subscribers: "больше 100",
        time: "msk+6", // Изменено на "msk+6"
        hardSkills: ["programmer"],
        qualities: ["mechanisms"], // Добавлено
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/aristocrati.jpg" // Пожалуйста, убедитесь, что файл изображения существует и назван правильно
    },
    {
        name: "Watashi",
        gender: "female", // Изменено на "female"
        charisma: ["smart", "calm"],
        contentType: ["other"],
        seasons: ["3"],
        activity: "high",
        content: ["nothing"],
        lore: ["human"],
        subscribers: "больше 100",
        time: "msk",
        hardSkills: ["artist"],
        qualities: ["PVP"], // Добавлено
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/Watashi.jpg" // Пожалуйста, убедитесь, что файл изображения существует и назван правильно
    },
    {
        name: "Mimosirnik",
        gender: "male",
        charisma: ["thoughtful", "talkative"],
        contentType: ["streams", "videos"], // Изменено на "streams", "videos"
        seasons: ["1", "2", "3"], // Изменено на "1", "2", "3"
        activity: "medium",
        content: ["minecraftServers"],
        lore: ["human"],
        subscribers: "больше 500",
        time: "msk+4",
        hardSkills: ["programmer"],
        qualities: ["PVP"], // Добавлено
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/Mimosirnik.jpg"
    },
    {
        name: "_Westinghouse_",
        gender: "male",
        charisma: ["calm", "talkative"],
        contentType: ["videos"],
        seasons: ["2", "3"],
        activity: "high",
        content: ["minecraftServers", "facts"], // Добавлено "facts"
        lore: ["other"],
        subscribers: "больше 100",
        time: "msk+4",
        hardSkills: ["programmer", "3D"],
        qualities: ["mechanisms"], // Добавлено
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/Westinghouse.jpg"
    
    {
        name: "TanyaYtka",
        gender: "female",
        charisma: ["excited", "talkative"],
        contentType: ["videos"],
        seasons: ["3"],
        activity: "medium",
        content: ["walkthroughs", "shorts"],
        lore: ["human"],
        subscribers: "больше 500",
        time: "msk",
        hardSkills: ["programmer"],
        qualities: [],
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/tanyaytka.jpg"
    },
    {
        name: "megatntmega",
        gender: "male",
        charisma: ["smart", "calm", "thoughtful", "talkative"],
        contentType: ["other"],
        seasons: ["3"],
        activity: "medium",
        content: ["nothing"],
        qualities: ["mechanisms"],
        lore: ["human"],
        subscribers: "больше 100",
        time: "msk+4", // Изменено на "msk+4"
        hardSkills: ["programmer"],
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/megatntmega.jpg"
    },
    {
        name: "Дарквинд",
        gender: "male",
        charisma: ["calm", "talkative"],
        contentType: ["other"],
        seasons: ["3"],
        activity: "high",
        content: ["walkthroughs"], // Изменено на "walkthroughs"
        lore: ["human"],
        subscribers: "больше 500", // Изменено на "больше 500"
        time: "msk", // Убрано +2, так как не указано
        qualities: ["mechanisms", "PVP"],
        hardSkills: ["programmer", "3D", "artist"],
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/неожидарквинд.jpg"
    },
    {
        name: "ТОНИ КЛАРК",
        gender: "male",
        charisma: ["calm", "thoughtful", "talkative"], // Добавлена характеристика "thoughtful"
        contentType: ["videos"],
        seasons: ["3"],
        activity: "high",
        content: ["minecraftServers", "building", "shorts"], // Добавлены "building" и "shorts"
        lore: ["other"], // Изменено на "other"
        subscribers: "больше 100", // Изменено на "больше 100"
        qualities: ["mechanisms", "PVP"],
        time: "msk", // Убрано +2, так как не указано
        hardSkills: ["programmer", "3D", "artist"],
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/тониклааааарк.jpg" // Пожалуйста, убедитесь, что файл изображения существует и назван правильно
    },
    
    {
        name: "Саша Ари",
        gender: "male",
        charisma: ["excited", "talkative"],
        contentType: ["videos"],
        qualities: [],
        seasons: ["3"],
        activity: "low",
        content: ["reviews", "shorts"],
        lore: ["human"],
        subscribers: "больше 1000",
        time: "msk",
        hardSkills: ["3D", "artist"],
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/Саша Ари.jpg"
    },
    {
        name: "AbstrakteSilke",
        gender: "male",
        charisma: ["smart", "calm", "excited", "thoughtful", "aggressive", "talkative"],
        contentType: ["other"],
        seasons: ["3"],
        activity: "medium",
        content: ["nothing"],
        lore: ["human"],
        subscribers: "больше 100",
        qualities: ["mechanisms"],
        time: "msk+2",
        hardSkills: ["programmer"],
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/abstraktesilke.jpg"
    },
    {
        name: "Laqony",
        gender: "male",
        charisma: ["calm", "excited"],
        contentType: ["streams", "videos"],
        seasons: ["3"],
        activity: "medium",
        content: ["minecraftServers"],
        lore: ["human"],
        qualities: ["mechanisms"],
        subscribers: "больше 1000",
        time: "msk",
        hardSkills: ["artist"],
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/laqony.jpg"
    },

    {
        name: "Aderte",
        gender: "male",
        qualities: ["mechanisms"],
        charisma: ["talkative"],
        contentType: ["video"],
        seasons: ["3"],
        activity: "medium",
        content: ["modpack walkthroughs", "Minecraft servers"],
        lore: ["human"],
        subscribers: "больше 100",
        hardSkills: ["programmer"],
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/aderte.jpg"
    },

    {
        name: "Ютубер 1",
        gender: "male",
        qualities: ["mechanisms", "PVP"],
        charisma: ["smart", "calm"],
        contentType: ["streams", "videos"],
        seasons: ["1", "2"],
        activity: "high",
        content: ["builds", "reviews"],
        lore: ["human", "other"],
        subscribers: "1000+",
        hardSkills: ["programmer", "artist"],
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/youtuber1.png"
    },
    {
        name: "Ютубер 2",
        gender: "male",
        qualities: ["mechanisms"],
        charisma: ["smart", "calm"],
        contentType: ["streams", "videos"],
        seasons: ["1", "2"],
        activity: "high",
        content: ["builds", "reviews"],
        lore: ["human", "other"],
        subscribers: "1000+",
        hardSkills: ["programmer", "artist"],
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/youtuber1.png"
    },
    {
        name: "Ютубер 3",
        gender: "male",
        qualities: ["mechanisms", "PVP"],
        charisma: ["smart", "calm"],
        contentType: ["streams", "videos"],
        seasons: ["1", "2"],
        activity: "high",
        content: ["builds", "reviews"],
        lore: ["human", "other"],
        subscribers: "1000+",
        hardSkills: ["programmer", "artist"],
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/youtuber1.png"
    },
    {
        name: "Ютубер 4",
        gender: "male",
        qualities: ["mechanisms"],
        charisma: ["smart", "calm"],
        contentType: ["streams", "videos"],
        seasons: ["1", "2"],
        activity: "high",
        content: ["builds", "reviews"],
        lore: ["human", "other"],
        subscribers: "1000+",
        hardSkills: ["programmer", "artist"],
        socialLinks: {
            twitch: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            youtube: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS",
            telegram: "https://youtu.be/dQw4w9WgXcQ?si=vyvx7YJvh3NLJpfS"
        },
        image: "images/youtuber1.png"
    },
]

export default youtubersData;
