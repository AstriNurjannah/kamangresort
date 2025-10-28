import React, { useEffect } from "react";

const ChatbotFlowise = () => {
  useEffect(() => {
    // Muat script Flowise dari CDN
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Chatbot) {
        window.Chatbot.init({
          chatflowid: "aea25fee-f102-4c0c-b5f2-1761535bbb37",
          apiHost: "https://cloud.flowiseai.com",
          theme: {
            button: {
              backgroundColor: "#315B51",
              right: 20,
              bottom: 80,
              size: 48,
              dragAndDrop: true,
              iconColor: "white",
              customIconSrc: "/Kamang-Resort/CS2.png",
            },
            tooltip: {
              // showTooltip: true,
              // tooltipMessage: "Hai, Perlu Bantuan?",
              tooltipBackgroundColor: "#315B51",
              tooltipTextColor: "white",
              tooltipFontSize: 16,
            },
            chatWindow: {
              showTitle: true,
              showAgentMessages: true,
              title: "Assistant Virtual Kamala",
              titleAvatarSrc: "/Kamang-Resort/LogoResort.png",
              welcomeMessage:
                "Selamat datang di Kamang Resort. Perkenalkan, saya Kamala, asisten virtual Anda. Silakan ajukan pertanyaan terkait fasilitas, layanan, atau informasi seputar resort kami.",
              backgroundColor: "#ffffff",
              height: 500,
              width: 400,
              fontSize: 14,
              starterPrompts: ["Harga kamar?", "Fasilitas?"],
              starterPromptFontSize: 14,
              clearChatOnReload: false,
              renderHTML: true,
              botMessage: {
                backgroundColor: "#f7f8ff",
                textColor: "#303235",
                showAvatar: true,
                avatarSrc: "/Kamang-Resort/kamara.png",
              },
              userMessage: {
                backgroundColor: "#3B81F6",
                textColor: "#ffffff",
                showAvatar: true,
                avatarSrc:
                  "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
              },
              textInput: {
                placeholder: "Tulis pertanyaan Anda...",
                backgroundColor: "#ffffff",
                textColor: "#303235",
                sendButtonColor: "#3B81F6",
                maxChars: 100,
                autoFocus: true,
              },
              feedback: {
                color: "#303235",
              },
              dateTimeToggle: {
                date: true,
                time: true,
              },
              footer: {
                textColor: "#303235",
                text: "Created by",
                company: "Team8proper.Id ",
                companyLink: "https://flowiseai.com",
              },
            },
          },
        });
      }
    };

    // Cleanup script jika komponen di-unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Tidak perlu tampilan tambahan
};

export default ChatbotFlowise;
