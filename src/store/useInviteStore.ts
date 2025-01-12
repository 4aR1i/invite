import { defineStore } from "pinia";
import emailjs from "emailjs-com";
import dayjs from "dayjs";

type TInviteStore = {
  invite: {
    resource: number;
    place: string;
    date: string;
  };
};

export const useInviteStore = defineStore("invite", {
  state: (): TInviteStore => ({
    invite: {
      resource: 0,
      place: "",
      date: "",
    },
  }),
  actions: {
    async sendEmail() {
      const formattedDate = dayjs(this.invite.date).format("DD.MM.YYYY HH:mm");
      const formData = {
        user_name: "Yana",
        message: JSON.stringify(
          `Ресурс: ${this.invite.resource}. Место: ${this.invite.place}. Время: ${formattedDate}.`,
        ),
      };

      try {
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        await emailjs.send(serviceID, templateID, formData, publicKey);

        return true;
      } catch (error) {
        console.error("Ошибка отправки:", error);
      }
    },
  },
});
