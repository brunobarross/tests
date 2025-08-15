import type { ScheduleResponse } from "~/types";

interface ScheduleStoreInterface {
  schedules: ScheduleResponse | null;
}
export const useSchedulesStore = defineStore("SchedulesStore", {
  state: (): ScheduleStoreInterface => ({
    schedules: null,
  }),
});
