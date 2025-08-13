export type Gym = {
  id: number;
  name: string;
};

export type Schedule = {
  id: number;
  className: string;
  date: string; // ISO date string
  startTime: string; // ISO time string
  endTime: string;   // ISO time string
  gym: Gym;
  _links: {
    self: {
      href: string;
    };
    gym: {
      href: string;
    };
  };
};

export type ScheduleResponse = {
  _embedded: {
    scheduleList: Schedule[];
  };
  _links: {
    self: {
      href: string;
    };
  };
};
