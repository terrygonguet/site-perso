export default {
  label: "Base",
  icon: "",
  children: [
    {
      label: "Me",
      icon: "user",
      page: "me",
    },
    {
      label: "Projects",
      icon: "code",
      children: [
        {
          label: "Finished",
          icon: "checkmark",
          page: "projects/done",
        },
        {
          label: "Old or Unfinished",
          icon: "cobweb",
          page: "projects/abandonned",
        },
        {
          label: "Current Experiment",
          icon: "science",
          page: "projects/experiment",
        },
      ],
    },
    {
      label: "Links & Contact",
      icon: "link",
      page: "contact",
    },
  ],
}

export const icons = ["user", "checkmark", "cobweb", "science", "link", "code"]
