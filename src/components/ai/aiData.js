import openai from './images/openai.png'
export const aiData = [
    {
        id: 0,
        type: "General Purpose A.I Tools",
        desc: " Natural Language Processing (NLP) tools, such as ChatGPT, that analyze and generate human language" ,
        content: [
            {
                name: "ChatGPT",
                desc: "ChatGPT is a natural language processing tool driven by AI technology that allows you to have human-like conversations and much more with a chatbot. The language model can answer questions, and assist you with tasks such as composing emails, essays, and code.",
                url: "https://chat.openai.com",
                img: {openai}
            }
        ]
    },
    {
        id: 1,
        type: "Visual Artistic & Creative",
        desc: "Image Generation; generate images using prompts",
        content: [
            {
                name: "Midjourney",
                desc: "Midjourney is an AI image generation tool that uses GANs (Generative Adversarial Networks) to generate images based on user input prompts.",
                url: "https://midjourney.com/",
                img: ""
            },
         
            {
                name: "Playground",
                desc: "Playground is an AI tool that helps businesses create and deploy AI models with ease. Their AI works by simplifying the process of developing, training, and deploying machine learning models, making it more accessible to businesses of all sizes. They offer a user-friendly platform that allows users to build custom models using drag-and-drop tools and pre-built templates.",
                url: "https://www.playground.ai/",
                img: ""
            },
            {
                name: "PhotoRoom",
                desc: "PhotoRoom is an AI-powered photo editing tool that helps users remove backgrounds from their images in just a few seconds. Their AI works by using deep learning algorithms to detect and isolate the main subject in the image, and then removing the background while keeping the subject intact. PhotoRoom also offers other editing features like adding new backgrounds, changing the color of the subject, and more.",
                url: "https://photoroom.com/",
                img: ""
            },
            {
                name: "Alpaca",
                desc: "Alpaca is an AI tool that uses natural language processing (NLP) and machine learning to help businesses measure and understand the emotional tone of their communications with customers. Their AI works by analyzing text-based interactions like emails, chat messages, and social media posts, and providing businesses with insights on how customers are feeling about their products or services. Alpaca aims to help businesses improve customer satisfaction and loyalty by providing actionable insights based on emotional intelligence.",
                url: "https://alpaca.ai/",
                img: ""
            },
            {
                name: "Lexica",
                desc: "Lexica is an AI company that provides natural language processing (NLP) services. Their NLP technology understands human language and can analyze and extract meaning from large volumes of text. The company's goal is to help businesses make better decisions by providing them with valuable insights from data.",
                url: "https://www.lexica.ai/",
                img: ""
            },
            {
                name: "Nyx Gallery",
                desc: "Nyx Gallery is an AI-powered platform that enables artists and creatives to generate and showcase high-quality artwork at scale. With Nyx Gallery, users can explore a vast collection of unique, AI-generated art pieces or create their own using the platform's intuitive tools and algorithms",
                url: "https://www.nyxgallery.ai/",
                img: ""
            },
            {
                name: "Mage.Space",
                desc: "Mage is an AI-powered platform that allows you to create and customize high-quality 3D and AR visuals for e-commerce, advertising, and more. With Mage, you can generate photorealistic 3D models and AR experiences without needing any technical skills, making it accessible to anyone.",
                url: "https://mage.space/",
                img: ""
            },
            {
                name: "Krea",
                desc: "Krea is an AI-powered design platform that uses machine learning to help users create high-quality designs quickly and easily. With Krea, users can choose from a variety of design templates and customize them with their own images, text, and branding. The platform also offers advanced features like automatic design suggestions and real-time collaboration tools to streamline the design process.",
                url: "https://krea.ai/",
                img: ""
            },
            {
                name: "ArtBreeder",
                desc: "ArtBreeder is an AI-powered image creator that uses machine learning algorithms to generate original digital artwork based on user input. Users can start with a base image and evolve it through a series of generations, adjusting various features along the way. The platform can be used for creating anything from portraits and landscapes to abstract art, and the resulting images can be downloaded or shared with others.",
                url: "https://www.artbreeder.com/",
                img: ""
            },
        ]
    },
    {
        id: 2,
        type: "Scientific Creativity",
        desc: "",
        content: [
            {
                name: "Eureqa",
                desc: "Eureqa is an AI tool for scientific creativity that allows users to quickly and accurately build mathematical models based on their data. It uses advanced machine learning algorithms to find the most accurate model for any given dataset. Eureqa is widely used in various scientific fields, including engineering, physics, and chemistry.",
                url: "https://www.nutonian.com/products/eureqa/",
                img: ""
            },
            {
                name: "Atomwise",
                desc: "Atomwise is an AI tool for scientific creativity that uses deep learning algorithms to accelerate drug discovery. It can predict the binding affinity of small molecules to potential drug targets, enabling researchers to quickly identify the most promising candidates for further development. Atomwise is used by major pharmaceutical companies and academic institutions around the world.",
                url: "https://www.atomwise.com/",
                img: ""
            },
            {
                name: "AlphaFold",
                desc: "AlphaFold is an AI tool for scientific creativity developed by DeepMind that uses deep learning algorithms to predict the structure of proteins. It has revolutionized the field of structural biology, allowing researchers to predict protein structures with high accuracy and speed. AlphaFold has the potential to accelerate drug discovery and improve our understanding of many diseases.",
                url: "https://deepmind.com/research/case-studies/alphafold/",
                img: ""
            },
            {
                name: "Neuromation",
                desc: "Neuromation is an AI tool for scientific creativity that allows users to generate synthetic data for AI training. It uses advanced machine learning algorithms to create high-quality synthetic data that can be used to train AI models more effectively. Neuromation is used in various scientific fields, including computer vision, natural language processing, and robotics.",
                url: "https://neuromation.io/",
                img: ""
            },
            {
                name: "GROVER",
                desc: "GROVER is an AI tool for scientific creativity that uses neural networks to generate realistic text, images, and other types of data. It has applications in various scientific fields, including natural language processing, computer vision, and generative art. GROVER can be trained on large datasets to generate high-quality outputs that can be used for various purposes, including research and creative projects.",
                url: "https://github.com/rowanz/grover",
                img: ""
            },
        ]
    },
    {
        id: 3,
        type: "Sound & Musical Creativity",
        desc: "Sound and Music generation",
        content: [
            {
                name: "Splash",
                desc: "Splash is a platform that enables creative professionals to generate high-quality videos with the help of AI-generated music. Users can customize their videos and choose from various AI-generated soundtracks to add emotion and energy to their work.",
                url: "https://www.madewithsplash.com/",
                img: ""
            },
            {
                name: "Mubert",
                desc: "Endel is an AI-powered app that generates personalized soundscapes to help users relax, focus, and sleep better. The app adapts to users' real-time inputs, such as time of day, weather, and heart rate, to create an immersive and calming environment that promotes well-being.",
                url: "https://mubert.com/",
                img: ""
            },
            {
                name: "Endel",
                desc: "Sonify is a tool that converts data into sound, enabling users to analyze and interpret complex datasets through soundscapes. The platform uses AI-generated soundscapes to create an auditory representation of data, making it easier to identify patterns and anomalies.",
                url: "https://endel.io/",
                img: ""
            },
             {
                name: "Harmonai",
                desc: "Description: Harmonai is an AI-powered platform that helps users create original music compositions. Users can choose from various genres and styles, and the platform will generate unique melodies and harmonies based on their inputs. The tool is great for musicians, music producers, and content creators looking to add original music to their work.",
                url: "https://harmonai.com/",
                img: ""
            },
            {
                name: "Boomy",
                desc: "Boomy is an AI-powered music creation platform that enables users to create original music tracks in minutes. The platform uses AI algorithms to generate unique melodies, harmonies, and beats based on users' inputs and preferences. Boomy is a great tool for content creators and musicians looking to quickly generate original music tracks for their projects.",
                url: "https://boomy.com/",
                img: ""
            },
            {
                name: "Aiva Technologies",
                desc: "Aiva Technologies is an AI-powered platform that helps users create original music compositions. The platform uses deep learning algorithms to generate unique melodies, harmonies, and arrangements based on users' inputs and preferences. Aiva is a great tool for musicians, music producers, and content creators looking to add original music to their work.",
                url: "https://www.aiva.ai/",
                img: ""
            }
        ]
    },
    {
        id: 4,
        type: "Text To Speech",
        desc: "Voice Synthesis",
        content: [
            {
                name: "Resemble A.I",
                desc: "Resemble.ai is a voice cloning platform that uses artificial intelligence to generate realistic synthetic voices from a recording of any person's voice. This technology can be used to create voiceovers for videos, virtual assistants, audiobooks, and more.",
                url: "https://www.resemble.ai/",
                img: ""
            },
            {
                name: "WellSaid Labs",
                desc: "WellSaid Labs is an AI-powered voiceover platform that enables businesses to generate natural-sounding voiceovers for their content. The platform uses deep learning models to create lifelike voices that can be customized by tone, speed, and language.",
                url: "https://www.wellsaidlabs.com/",
                img: ""
            },
            {
                name: "Broadn",
                desc: "Broadn is an AI-powered voiceover platform that enables businesses to generate lifelike voiceovers for their content. The platform uses deep learning models to create realistic synthetic voices that can be customized by tone, speed, and language.",
                url: "https://www.broadn.ai/",
                img: ""
            },
            {
                name: "PodcastAI",
                desc: "PodcastAI is an AI-powered podcast editing tool that uses machine learning to enhance audio quality, reduce background noise, and remove filler words. The platform can also transcribe podcasts and generate show notes.",
                url: "https://podcastai.com/",
                img: ""
            },
            {
                name: "FLiki",
                desc: " Fliki is an AI-powered virtual sound engineer that uses machine learning to analyze and optimize audio quality in real time. The platform can automatically adjust levels, EQ, and compression to create a professional sound.",
                url: "https://fliki.audio/",
                img: ""
            },
            {
                name: "Coqui",
                desc: "Coqui is an open-source speech recognition platform that provides tools and models for developers to build speech recognition systems. The platform uses deep learning models to recognize and transcribe speech in multiple languages.",
                url: " https://coqui.ai/",
                img: ""
            },
            {
                name: "Descript Overdub",
                desc: "Descript Overdub is an AI-powered voice editing tool that enables users to edit and manipulate audio recordings with ease. The platform can also generate synthetic voices from text using natural language processing.",
                url: "https://www.descript.com/overdub",
                img: ""
            },
            {
                name: "Listnr",
                desc: "Listnr is an AI-powered podcast editing tool that uses machine learning to enhance audio quality and remove background noise. The platform also provides automatic transcription and audio-to-text search capabilities.",
                url: "https://www.listnr.tech/",
                img: ""
            },
            {
                name: "REPLICA",
                desc: "REPLICA is an AI-powered voice cloning platform that enables users to create lifelike synthetic voices from a recording of any person's voice. The platform can be used for voiceovers, virtual assistants, and chatbots.",
                url: "https://replicastudios.com/",
                img: ""
            },   
            {
                name: "VoiceMod",
                desc: "VoiceMod is an AI-powered voice changer and soundboard that enables users to modify their voice in real time during online calls and gaming. The platform uses deep learning models to generate lifelike voice effects and filters.",
                url: "https://www.voicemod.net/",
                img: ""
            }
        ]
    },
    {
        id: 5,
        type: "Marketing & Sales Copy",
        desc: "",
        content: [
            {
                name: "Copy.ai",
                desc: " Copy.ai is an AI-powered copywriting tool that helps businesses create high-quality and engaging content in minutes. With Copy.ai, users can generate copy for social media, email campaigns, blog posts, and more with just a few clicks. The tool uses machine learning algorithms to analyze user input and provide tailored suggestions based on the content's context, tone, and style",
                url: "https://www.copy.ai/",
                img: ""
            },
            {
                name: "Jasper",
                desc: "Jasper is an all-in-one AI-powered content creation platform that enables businesses to create high-quality content at scale. With Jasper, users can generate blog posts, social media updates, ad copy, and more in just a few clicks. The tool uses machine learning algorithms to analyze user input and provide tailored suggestions based on the content's context, tone, and style.",
                url: "https://www.jasperlabs.ai/",
                img: ""
            },
            {
                name: "CopySmith",
                desc: "Copysmith is an AI-powered content creation tool that helps businesses generate high-quality content at scale. With Copysmith, users can create blog posts, product descriptions, ad copy, and more in just a few clicks. The tool uses machine learning algorithms to analyze user input and provide tailored suggestions based on the content's context, tone, and style.",
                url: "https://www.copysmith.ai/",
                img: ""
            },
            {
                name: "Anyword",
                desc: "Anyword is an AI-powered copywriting tool that helps businesses create high-converting copy for ads, emails, landing pages, and more. With Anyword, users can generate copy that resonates with their target audience in just a few clicks. The tool uses machine learning algorithms to analyze user input and provide tailored suggestions based on the content's context, tone, and style.",
                url: "https://anyword.com/",
                img: ""
            },
            {
                name: "Mutiny",
                desc: "Mutiny is an AI-powered personalization platform that helps businesses create personalized content experiences for their target audience. With Mutiny, users can create personalized landing pages, emails, and ads in just a few clicks. The tool uses machine learning algorithms to analyze user behavior and provide tailored content recommendations based on their interests and preferences.",
                url: "https://www.mutinyhq.com/",
                img: ""
            },
            {
                name: "Hypontenuse",
                desc: "Hypotenuse is an AI-powered content creation platform that helps businesses create high-quality content at scale. With Hypotenuse, users can generate blog posts, social media updates, ad copy, and more in just a few clicks. The tool uses machine learning algorithms to analyze user input and provide tailored suggestions based on the content's context, tone, and style.",
                url: "https://hypotenuse.ai/",
                img: ""
            },
            {
                name: "Peppertype.ai",
                desc: "Peppertype.ai is an AI-powered writing assistant that helps users create high-quality content for their personal or professional needs. With Peppertype.ai, users can generate blog posts, social media updates, email copy, and more in just a few clicks. The tool uses machine learning algorithms to analyze user input and provide tailored suggestions based on the content's context, tone, and style.",
                url: "https://www.peppertype.ai/",
                img: ""
            },
            {
                name: "WriteSonic",
                desc: "'AI-powered copywriting and content creation' Description: Writesonic is an AI-powered copywriting and content creation tool that helps businesses create high-quality content at scale. With Writesonic, users can generate blog posts, social media updates, ad copy, and more in just a few clicks.",
                url: "https://writesonic.com/",
                img: ""
            },
            {
                name: "Moonbeam",
                desc: "Moonbeam is an AI-powered copywriting tool designed to help businesses create high-performance ads. It uses machine learning algorithms to generate effective headlines, descriptions, and call-to-actions that capture the attention of the audience and increase conversions.",
                url: "https://moonbeam.ai/",
                img: ""
            },
            {
                name: "Clickable",
                desc: "Clickable is an AI-powered SEO and content marketing tool that helps businesses optimize their content for search engines. It uses natural language processing algorithms to analyze the content and suggest improvements, such as keyword suggestions, content optimization, and performance tracking.",
                url: "https://clickable.ai/",
                img: ""
            },
            {
                name: "Omneky",
                desc: "Omneky is an AI-powered content creation tool that helps businesses automate their content creation process. It uses machine learning algorithms to generate high-quality content, including articles, blogs, social media posts, and more. Omneky's technology can also help optimize content for SEO and suggest relevant topics.",
                url: "https://omneky.com/",
                img: ""
            },
            {
                name: "Frase",
                desc: "Frase is an AI-powered content optimization tool that helps businesses improve their SEO and content strategy. It uses natural language processing algorithms to analyze content and suggest improvements, such as keyword optimization, and content gap analysis.",
                url: "https://www.frase.io/",
                img: ""
            },
        ]
    },
    {
        id: 6,
        type: "Coding & Web Developement",
        desc: "",
        content: [
            {
                name: "GitHub Copilot",
                desc: "GitHub Copilot is an AI tool that helps developers write better code. It provides suggestions for code completion, functions, and entire code blocks based on the context of the code being written. Copilot uses a machine learning model trained on a large dataset of open source code to provide intelligent suggestions to the user.",
                url: "https://copilot.github.com/",
                img: ""
            },
            {
                name: "Replit GhostWriter",
                desc: "Replit Ghostwriter is an AI-powered writing tool that helps users generate high-quality content quickly and easily. It uses state-of-the-art machine learning algorithms to analyze text and generate suggestions that help users write better and faster. Ghostwriter can be used for a variety of writing tasks, including blog posts, social media updates, and more.",
                url: "https://replit.com/ghostwriter",
                img: ""
            },
            {
                name: "Tabnine",
                desc: "TabNine is an AI-powered code completion tool that helps developers write code faster and more accurately. It uses deep learning algorithms to analyze the code being written and provides intelligent suggestions for the next line of code. TabNine can be used with a wide range of programming languages and text editors, making it a versatile tool for any developer.",
                url: "https://www.tabnine.com/",
                img: ""
            },
            {
                name: "Mutable AI",
                desc: "Mutable is an AI-powered platform that makes it easy for developers to add machine learning capabilities to their applications. It provides a suite of tools and APIs that enable developers to build intelligent applications with minimal coding. Mutable can be used for a wide range of applications, including computer vision, natural language processing, and more.",
                url: "https://mutable.io/",
                img: ""
            },
        ]
    },
    {
        id: 7,
        type: "Video Generation",
        desc: "",
        content: [
            {
                name: "Runway",
                desc: "Runway is an AI-powered platform that allows artists, designers, and developers to create using machine learning models. With its intuitive interface, users can experiment with different models, customize them, and integrate them into their workflows.",
                url: "https://runwayml.com/",
                img: ""
            },
            {
                name: "Dubverse",
                desc: "DubVerse is an AI-powered music composition platform that allows users to create unique music tracks using artificial intelligence. With its easy-to-use interface, users can generate melodies, drum beats, and basslines using different styles and genres",
                url: "https://dubverse.ai/",
                img: ""
            },
            {
                name: "Opus",
                desc: "Opus is an AI-powered platform that aims to make music creation more accessible to everyone. With its intuitive interface, users can create and share their music compositions using AI-generated sounds, effects, and samples.",
                url: "https://www.opus.ai/",
                img: ""
            },
            {
                name: "Tavus",
                desc: "Tavus is an AI-powered platform that helps musicians and producers to understand their music better. With its advanced music analysis algorithms, Tavus provides insights into different aspects of music, such as harmony, melody, and rhythm, helping users to improve their skills and create better music",
                url: "https://www.tavus.ai/",
                img: ""
            },
            {
                name: "Synthesia",
                desc: "Synthesia is an AI-powered platform that allows users to create realistic videos using artificial intelligence. With its advanced video generation technology, users can create video content for various applications, such as marketing, education, and entertainment, without the need for expensive equipment or specialized skills.",
                url: "https://www.synthesia.io/",
                img: ""
            },
            {
                name: "HourOne",
                desc: "HourOne is an AI-powered content creation platform that helps businesses to create engaging content quickly and easily. With its advanced language generation technology, HourOne can create text, audio, and video content that resonates with the target audience, helping businesses to increase engagement and conversions.",
                url: "https://www.hourone.ai/",
                img: ""
            },
            {
                name: "Rephrase.ai",
                desc: "Rephrase.ai is an AI-powered video editing platform that allows users to edit videos using artificial intelligence. With its advanced video processing algorithms, users can modify the video content, such as removing backgrounds, adding text, and changing colors, without the need for specialized skills or software.",
                url: "https://rephrase.ai/",
                img: ""
            },
            {
                name: "Colossyan",
                desc: "Colossyan is an AI-powered platform that enables creative professionals to generate new ideas and solutions using artificial intelligence. With its advanced natural language processing technology, Colossyan can analyze text data, such as articles, blogs, and social media, and provide insights and inspiration for creative projects.",
                url: " https://colossyan.com/",
                img: ""
            },
            {
                name: "Maria",
                desc: "Maria is an AI-powered writing assistant that helps writers to improve their writing skills and productivity. With its advanced language generation technology, Maria can suggest corrections, rephrase sentences, and provide inspiration for new ideas, helping writers to create better content in less time.",
                url: "https://mariaassistant.com/",
                img: ""
            },
        ]
    },
    {
        id: 8,
        type: "Design",
        desc: "",
        content: [
            {
                name: "Diagram",
                desc: "Diagram is an AI-powered diagramming platform that enables users to create diagrams and flowcharts quickly and easily. With its intuitive interface and built-in automation, Diagram streamlines the diagramming process, allowing users to focus on their ideas and concepts.",
                url: "https://diagram.app/",
                img: ""
            },
            {
                name: "VizCom",
                desc: "Vizcom is an AI-powered data visualization platform that enables businesses to turn complex data into actionable insights. With its advanced analytics and intuitive visualizations, Vizcom helps companies make better decisions and drive growth.",
                url: "https://www.vizcom.ai/",
                img: ""
            },
            {
                name: "Poly",
                desc: "Poly is an AI-powered platform for creating and editing audio and video content. With its advanced machine learning algorithms, Poly enables users to create high-quality content quickly and easily. Poly's AI also provides real-time feedback and suggestions, making it an essential tool for content creators and businesses alike.",
                url: "https://polyai.com/",
                img: ""
            },
            {
                name: "Interior",
                desc: "Interior is an AI-powered platform for interior design and home decor. With its advanced computer vision and machine learning algorithms, Interior enables users to visualize their space in real-time, making it easier to plan and execute their design ideas. Interior also features a marketplace where users can purchase furniture and decor items directly from the app.",
                url: "https://interior.ai/",
                img: ""
            },
            {
                name: "Uizard",
                desc: "Uizard is an AI-powered design platform that enables users to create high-fidelity designs and prototypes in minutes. With its intuitive interface and advanced machine learning algorithms, Uizard streamlines the design process, making it easier for designers to bring their ideas to life.",
                url: "https://uizard.io/",
                img: ""
            },
            {
                name: "Aragon",
                desc: "Aragon is an AI-powered governance platform that enables organizations to create decentralized autonomous organizations (DAOs). With its advanced smart contract technology and machine learning algorithms, Aragon makes it easy for organizations to create and manage their own DAOs, allowing for more transparent and democratic decision-making.",
                url: "https://aragon.org/",
                img: ""
            },
            {
                name: "Market",
                desc: "Market is an AI-powered platform for market research and analysis. With its advanced data analytics and machine learning algorithms, Market enables businesses to make data-driven decisions and gain insights into consumer behavior and market trends.",
                url: "https://market.us/",
                img: ""
            },
            {
                name: "CALA",
                desc: "CALA is an AI-powered fashion design platform that enables designers to create and produce their own clothing lines. With its advanced machine learning algorithms and predictive analytics, CALA streamlines the fashion design process, making it easier for designers to bring their ideas to market.",
                url: "https://www.ca.la/",
                img: ""
            },
        ]
    },
    {
        id: 9,
        type: "Knowledge Management & Search",
        desc: "",
        content: [
            {
                name: "Glean",
                desc: "Glean is an AI-powered data analysis tool that helps businesses extract meaningful insights from unstructured data. With its advanced natural language processing algorithms, Glean can analyze large volumes of text data and identify key themes, sentiment, and entities to provide actionable insights to businesses",
                url: "https://www.glean.co/",
                img: ""
            },
            {
                name: "Mem",
                desc: "Mem is an AI-powered note-taking tool that helps remote teams stay organized and productive. With its advanced search and collaboration features, Mem makes it easy for teams to share knowledge and stay on top of tasks, even when working from different locations. Mem also uses natural language processing to make note-taking easier and more intuitive.",
                url: "https://mem.ai/",
                img: ""
            },
            {
                name: "YOU",
                desc: "YOU is an AI-powered personal assistant that can help you with a wide range of tasks, from scheduling meetings and sending emails to setting reminders and providing personalized recommendations. With its advanced machine learning algorithms, YOU can learn your preferences and tailor its responses to your specific needs and preferences.",
                url: "https://you.ai/",
                img: ""
            },
        ]
    },
    {
        id: 10,
        type: "Customer Support Automation",
        desc: "",
        content: [
            {
                name: "Cohere",
                desc: "Cohere is an AI platform that enables developers to create natural language processing applications that can understand human language with greater accuracy and nuance. With its advanced deep learning models and pre-trained language models, Cohere can help businesses build more intelligent chatbots, voice assistants, and other conversational AI applications.",
                url: "https://cohere.ai/",
                img: ""
            },
            {
                name: "Kaizan",
                desc: "Kaizan is an AI-powered feedback tool that helps teachers and educators give feedback to students more quickly and effectively. With Kaizan, teachers can leave voice comments on student work that are automatically transcribed and summarized, saving time and helping students learn faster.",
                url: "https://www.kaizena.com/",
                img: ""
            },
            {
                name: "Typewise",
                desc: "Typewise is an AI-powered keyboard app that uses advanced natural language processing to help users type more accurately and efficiently. With its unique hexagonal key layout and auto-correction algorithms, Typewise can help users type up to 4x faster than with a standard keyboard. Additionally, Typewise is designed with privacy in mind, and does not collect any personal data.",
                url: "https://typewise.app/",
                img: ""
            },
            {
                name: "Cresta",
                desc: "Cresta is an AI-powered customer service tool that helps businesses deliver more personalized and effective customer experiences. With its advanced natural language processing and machine learning algorithms, Cresta can analyze customer conversations in real-time and provide agents with suggested responses and next-best-actions to improve customer satisfaction.",
                url: "https://cresta.com/",
                img: ""
            },
            {
                name: "Xoxind",
                desc: "Xoxoday is an AI-powered employee engagement and recognition platform that helps businesses improve employee morale and performance. With its advanced machine learning algorithms and personalized rewards programs, Xoxoday can help businesses create a more engaged and motivated workforce. Additionally, Xoxoday offers a wide range of experiences and activities that employees can use to celebrate and reward themselves, from travel and adventure to health and wellness programs.",
                url: "https://www.xoxoday.com/",
                img: ""
            },

        ]
    },
    {
        id: 11,
        type: "Character Generation",
        desc: "A.I 3D character prompt auto generators",
        content: [
            {
                name: "Character A.I",
                desc: "Character AI is an AI-powered animation tool that helps game developers and animators create realistic, lifelike character animations with ease. With its advanced machine learning algorithms and intuitive interface, Character AI can help users create high-quality animations in minutes, without the need for complex rigs or keyframe animation.",
                url: "https://character.ai/",
                img: ""
            },
            {
                name: "Inworld",
                desc: "Inworld is an AI-powered 3D scanning and rendering platform that can create high-quality 3D models of real-world objects and environments in real-time. With its advanced computer vision algorithms and autonomous capture system, Inworld can create immersive 3D experiences for a wide range of applications, from e-commerce and advertising to virtual reality and gaming.",
                url: "https://inworld.ai/",
                img: ""
            },
            {
                name: "The Simulation",
                desc: "The Simulation is an AI-powered virtual world that allows users to explore and experiment with new ideas and technologies in a safe and controlled environment. With its advanced physics engine and realistic graphics, The Simulation can simulate complex systems and scenarios to help users develop and test new products, services, and solutions.",
                url: "https://thesimulation.com/",
                img: ""
            },
            {
                name: "Oasis",
                desc: "Oasis is an AI-powered data analytics platform that helps businesses extract insights and value from their data. With its advanced machine learning algorithms and natural language processing, Oasis can help users quickly and easily analyze complex data sets and identify key trends and patterns. Additionally, Oasis offers a wide range of data visualization tools and integrations with popular data sources and tools.",
                url: "https://oasis.digital/",
                img: ""
            }
        ]
    },
    {
        id: 12,
        type: "Gaming",
        desc: "",
        content: [
            {
                name: "A.I Dungeon",
                desc: "A.I Dungeon is an AI-powered text adventure game that allows users to explore interactive stories generated by its advanced natural language processing algorithms. With its open-ended storytelling and customizable settings, A.I Dungeon can create unique and unpredictable storylines for players to experience. Players can choose their own character and plot, and the AI will respond to their choices in real-time, creating a personalized narrative experience.",
                url: "https://www.aidungeon.io/",
                img: ""
            },
            {
                name: "Pornpen.ai",
                desc: "pornpen.ai generates adult imagery with custom AI algorithms. Just choose your tags and click generate to get started! ",
                url: "https://pornpen.ai/",
                img: ""
            },
        ]
    },
   
]