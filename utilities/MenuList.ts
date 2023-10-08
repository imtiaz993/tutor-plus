import { TutorProfile, SideBarCalendar, Note2, Messages, Bank, EditProfile, Homework, Find } from '@/images/svg'

interface MenuItem {
  path: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
}

export const MenuList: MenuItem[] = [
  {
    path: '/TutorDashboard/Dashboard',
    icon: TutorProfile,
    text: 'Dashboard',
  },
  {
    path: '/TutorDashboard/Calendar',
    icon: SideBarCalendar,
    text: 'Calendar',
  },
  {
    path: '/TutorDashboard/resources',
    icon: Note2,
    text: 'Resorces',
  },
  {
    path: '/TutorDashboard/Requests',
    icon: Messages,
    text: 'Messages',
  },
  {
    path: '/TutorDashboard/account-settings',
    icon: Bank,
    text: 'Account Settings',
  },
  {
    path: '/TutorDashboard/EditProfile',
    icon: EditProfile,
    text: 'Edit Profile',
  },
];

export const StudentMenuList: MenuItem[] = [
  {
    path: '/StudentDashboard/Dashboard',
    icon: TutorProfile,
    text: 'Dashboard',
  },
  {
    path: '/StudentDashboard/Homework',
    icon: Homework,
    text: 'Homework',
  },
  {
    path: '/StudentDashboard/Profile',
    icon: Bank,
    text: 'Profile',
  },
  {
    path: '/StudentDashboard/FindATutor',
    icon: Find,
    text: 'Find a Tutor',
  },
  {
    path: '/StudentDashboard/WorkMarked',
    icon: Bank,
    text: 'Get Work Marked',
  },
];
