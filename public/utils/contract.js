export const ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timeslot",
        type: "uint256",
      },
    ],
    name: "AppointmentAlreadyBooked",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fees",
        type: "uint256",
      },
    ],
    name: "NotEnoughFees",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "defaulter",
        type: "address",
      },
      {
        internalType: "address",
        name: "doctorAddress",
        type: "address",
      },
    ],
    name: "OnlyDoctorCanGiveFeedbackOfAppointment",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "defaulter",
        type: "address",
      },
      {
        internalType: "address",
        name: "doctorAddress",
        type: "address",
      },
    ],
    name: "OnlyDoctorCanReceivePayment",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "defaulter",
        type: "address",
      },
      {
        internalType: "address",
        name: "patientAddress",
        type: "address",
      },
    ],
    name: "OnlyPatientCanBookAppointment",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "defaulter",
        type: "address",
      },
      {
        internalType: "address",
        name: "patientAddress",
        type: "address",
      },
    ],
    name: "OnlyPatientCanGiveFeedbackOfAppointment",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "appointmentId",
        type: "uint256",
      },
    ],
    name: "PaymentAlreadyDone",
    type: "error",
  },
  {
    inputs: [],
    name: "PaymentFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredAmount",
        type: "uint256",
      },
    ],
    name: "StakeMoreToBecomeDoctor",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "appointmentId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "patientId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "doctorId",
        type: "uint256",
      },
    ],
    name: "AppointmentBooked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "appointmentId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "patientAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "doctorAddress",
        type: "address",
      },
    ],
    name: "AppointmentPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "doctorAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "NewDoctorRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "patientAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "NewPatientRegistered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_feesInWei",
        type: "uint256",
      },
    ],
    name: "addDoctor",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "addPatient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_patientId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_doctorId",
        type: "uint256",
      },
    ],
    name: "canAccessPatientData",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_appointmentId",
        type: "uint256",
      },
    ],
    name: "completeAppointmentByDoctor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_appointmentId",
        type: "uint256",
      },
    ],
    name: "completeAppointmentByPatient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "doctors",
    outputs: [
      {
        internalType: "address",
        name: "doctorAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "feesInWei",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "doctorsNFT",
    outputs: [
      {
        internalType: "contract Doctors",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getDoctorAddressById",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timeslot",
        type: "uint256",
      },
    ],
    name: "getDoctorAppointmentsById",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getDoctorById",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getDoctorFeesById",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getPatientById",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "patientAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
          {
            internalType: "uint256[]",
            name: "appointments",
            type: "uint256[]",
          },
        ],
        internalType: "struct Patient",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalPatients",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_patientId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_doctorId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timeslot",
        type: "uint256",
      },
    ],
    name: "makeAppointment",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "patients",
    outputs: [
      {
        internalType: "address",
        name: "patientAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_appointmentId",
        type: "uint256",
      },
    ],
    name: "receivePaymentByDoctor",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];
export const contractAddress = "0xe9694a2A5FCB822B42CE57B15C23bBceF609B201";
