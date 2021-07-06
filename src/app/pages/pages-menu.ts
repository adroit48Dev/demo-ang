import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  // {
  //   title: 'E-commerce',
  //   icon: 'shopping-cart-outline',
  //   link: '/pages/dashboard',
  // },
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
    home: true,
  },
  {
    title: 'Bank Maintenance ',
    icon: 'layout-outline',
    children: [

      {
        title: 'Global Settings',
        link: '/pages/layout/branchview',
      },
    ],
  },
  {
    title: 'Branch Maintenance ',
    icon: 'layout-outline',
    children: [

      {
        title: 'Branch View',
        link: '/pages/layout/branchview',
      },
    ],
  },
  {
    title: 'Employee Management',
    icon: 'person-outline',
    children: [
      {
        title: 'Employees Details',
        link: '/pages/employeemanagement/viewemployee',
      },
      {
        title: 'Transaction Limit',
        link: '/pages/employeemanagement/viewtrans-limit',
      },
      {
        title: 'Employees Role',
        link: '/pages/employeemanagement/allemprolelist',
      },
      {
        title: 'Employee logs',
        link: '/pages/employeemanagement/e-logs',
      },
      // {
      //   title: 'Salary Slips Forms',
      //   link: '/pages/employeemanagement/e-salary',
      // },
      // {
      //   title: 'Salary Slips',
      //   link: '/pages/employeemanagement/salaryslip',
      // },
    ],
  },
  {
    title: 'Attendance Service',
    icon: 'calendar-outline',
    children: [
      {
        title: 'Leave Policy',
        link: '/pages/attendanceservices/leavepolicy',
      },
      {
        title: 'Employee Leave',
        link: '/pages/attendanceservices/employeeleave',
      },
      {
        title: 'Salary',
        link: '/pages/attendanceservices/salary',
      },
      {
        title: 'Deductions',
        link: '/pages/attendanceservices/deductions',
      },
      {
        title: 'Attendance',
        link: '/pages/attendanceservices/attendance',
      },
    ],
  },
  {
    title: 'Holiday Management',
    icon: 'calendar-outline',
    children: [
      {
        title: 'Default Holiday',
        link: '/pages/holiday-management/defaultholiday',
      },
      {
        title: 'Special Holiday',
        link: '/pages/holiday-management/specialholiday',
      },


    ],
  },
  {
    title: 'Customer Management',
    icon: 'people-outline',
    children: [
      {
        title: 'Customer Profile',
        link: '/pages/product/user-profile',
      },
      {
        title: 'New Users',
        link: '/pages/product/user-status',
      },
      {
        title: 'New Customer Accounts',
        link: '/pages/product/useraccount',
      },
      {
        title: 'Customer Charged Accounts',
        link: '/pages/product/userchargedaccounts',
      },
      {
        title: 'Customer Accounts Interest',
        link: '/pages/product/useraccountsinterest',
      },
    ],
  },

  {
    title: 'Message/Email',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Send Message / Notifications',
        link: '/pages/messagesettings/emailtemplate',
      },
      {
        title: 'Message Teamplate',
        link: '/pages/messagesettings/templatecreation',
      },
      {
        title: 'Send Email',
        link: '/pages/emailservice/sendemail',
      },
      {
        title: 'Email Template',
        link: '/pages/emailservice/emailtemplate',
      },
    ],
  },
  {
    title: 'Statement /Reports',
    icon: 'list-outline',
    children: [
      {
        title: 'Bank Transaction',
        link: '/pages/product/GenearalLedger',
      },
      // {
      //   title: 'HQ Transaction',
      //   link: '/pages/product/hqtransaction',
      // },
      // {
      //   title: 'Vault Transaction',
      //   link: '/pages/product/vaulttransaction',
      // },
      {
        title: 'Statement service',
        link: '/pages/product/statementservice',
      },
    ],
  },
  {
    title: 'Documents',
    icon: 'list-outline',
    children: [
      {
        title: 'Employee Document',
        link: '/pages/documents/employee-document',
      },
      {
        title: 'Banker Document',
        link: '/pages/documents/banker-document',
      },
      {
        title: 'User Document',
        link: '/pages/documents/user-document',
      },

    ],
  },
  {
    title: 'FEATURES',
    group: true,
  },
  // {
  //   title: 'CASA Accounts',
  //   icon: 'cube-outline',
  //   children: [
  //     {
  //       title: 'Users Info',
  //       link: '/pages/casaaccounts/usersinfo',
  //     },
  //     {
  //       title: 'Create User',
  //       link: '/pages/casaaccounts/createprofile',
  //     },
  //   ],
  // },
  {
    // title: 'Product',
    title: 'CASA Accounts',
    icon: 'briefcase-outline',
    children: [
      // {
      //   title: 'New Account',
      //   link: '/pages/product/accountdetails',
      // },
      {
        title: 'Account Details',
        link: '/pages/product/accountdetailsview',
      },
      // {
      //   title: 'Loan Details',
      //   link: '/pages/product/loandetails',
      // },
      // {
      //   title: 'Deposit Details',
      //   link: '/pages/product/depositdetails',
      // },
      // {
      //   title: 'Create Interest',
      //   link: '/pages/product/interestdetails',
      // },
      {
        title: 'Interest',
        link: '/pages/product/interestdetailsview',
      },
      // {
      //   title: 'Create Fee',
      //   link: '/pages/product/feedetails',
      // },
      {
        title: 'Fee Details',
        link: '/pages/product/feedetailsview',
      },

    ],
  },
  {
    title: 'Deposit Management',
    icon: 'grid-outline',
    children: [
      {
        title: 'Bank Deposit',
        link: '/pages/deposit/bank-deposit',
      },
      {
        title: 'Deposit Condition',
        link: '/pages/deposit/deposit-condition',
      },
      {
        title: 'Deposit Scheme',
        link: '/pages/deposit/deposit-scheme',
      },
      {
        title: 'User Deposit',
        link: '/pages/deposit/user-deposit',
      },
    ],
  },
  {
    title: 'Loan Management',
    icon: 'gift-outline',
    children: [
      {
        title: 'Loan Product',
        link: '/pages/loans/loan',
      },
      {
        title: 'Loan Account',
        link: '/pages/loans/loan-account',
      },
      {
        title: 'Loan Approval',
        link: '/pages/loans/loan-approval',
      },
      {
        title: 'Loan Repayment',
        link: '/pages/loans/loan-repayment',
      },
      {
        title: 'Loan Payment Dues',
        link: '/pages/loans/payment-dues',
      },
      {
        title: 'Loan Pre-Closure',
        link: '/pages/loans/prepay-closure',
      },
      {
        title: 'Loan Account Overview',
        link: '/pages/loans/loan-acc-overview',
      },
    ],
  },
  // {
  //   title: 'Message Settings',
  //   icon: 'message-circle-outline',
  //   children: [
  //     {
  //       title: 'Email',
  //       link: '/pages/messagesettings/emailtemplate',
  //     },
  //     {
  //       title: 'Teamplate Creation',
  //       link: '/pages/messagesettings/templatecreation',
  //     },
  //   ],
  // },
  // {
  //   title: 'Notification Settings',
  //   icon: 'message-circle-outline',
  //   children: [
  //     {
  //       title: 'Notify',
  //       link: '/pages/notification/notifytemplate',
  //     },
  //   ],
  // },

  {
    title: 'Logout',
    icon: 'home-outline',
    link: '/pages/logout'
  },
];
