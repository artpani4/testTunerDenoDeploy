import Tuner from "@artpani/tuner";

const cfg = Tuner.tune({
  data: {
    adminId: 1234567892314321432,
    botName: "MyBot",
    someCommonField: "ЭТО ПОЛЕ ОТ БОТА - дочернего конфига",
  },
  env: {
    TOKEN: Tuner.Env.getString.orDefault("OLOLO"),
  },
});

export default cfg;
export type BotCfgType = typeof cfg;
