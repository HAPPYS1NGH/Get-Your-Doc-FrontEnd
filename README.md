# HealthCare Smart Contract

The HealthCare smart contract is a decentralized online healthcare system built on the Ethereum blockchain. It enables patients to book appointments with doctors, securely store patient records, and facilitate payment transactions. The contract leverages various technologies, including blockchain, decentralized storage, video conferencing, and encryption, to provide a comprehensive and secure healthcare solution.

## Smart Contract Repo 
https://github.com/HAPPYS1NGH/Get-Your-Doc
## Features

- Doctor Registration: Doctors can register on the platform by staking a certain amount and providing their information. Each registered doctor is represented by a non-fungible token (NFT) that serves as a unique identifier.

- Patient Registration: Patients can register on the platform by providing their information. Each patient is assigned a patient ID for identification purposes.

- Appointment Booking: Patients can book appointments with doctors based on their availability. The smart contract verifies the appointment slot and handles the booking process.

- Payment Processing: The smart contract handles payment transactions between patients and doctors. Patients pay the doctor's fees in Ether (ETH) when booking an appointment. The payment is securely transferred to the doctor upon appointment completion.

- Patient Record Storage: Patient records are stored in encrypted form using the Lit Protocol, ensuring data privacy and security. Access to patient records is granted to the respective doctors when appointments are booked.

- Video Conferencing: The project integrates WebRTC technology, specifically huddle01 library, to enable secure video conferencing between patients and doctors during appointments.

## Technologies Used

- Ethereum: The smart contract is developed on the Ethereum blockchain using the Solidity programming language.

- IPFS and Filecoin: The InterPlanetary File System (IPFS) is utilized for content addressing and distributed storage of patient records. Filecoin, a decentralized storage network, provides incentivized storage and retrieval of data.

- NFT.Storage: NFT.storage is used to store the NFT data for doctors, ensuring the uniqueness and authenticity of doctor NFTs.

- React.js: The frontend user interface is built using React.js, a JavaScript library for building interactive web interfaces.

- Lit Protocol: Patient records are encrypted using the Lit Protocol, providing end-to-end encryption and secure data storage.

- ERC20 Token: A non-transferable burnable ERC20 token is implemented to offer free trial credits to customers.

## Getting Started

1. Clone the repository and navigate to the project directory.

2. Install the necessary dependencies by running the following command:

   ```
   npm install
   ```

3. Deploy the smart contract to the Ethereum network of your choice using tools like Remix or Truffle.

4. Update the necessary configurations in the frontend code, such as contract addresses and provider endpoints.

5. Run the frontend application by executing the following command:

   ```
   npm start
   ```

6. Access the application in your web browser at `http://localhost:3000`.

## Contributing

Contributions to the HealthCare smart contract project are welcome! If you encounter any issues or have suggestions for improvement, please submit an issue or pull request on the project repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [OpenZeppelin](https://openzeppelin.com/): Solidity smart contract development library.
- [huddle01](https://huddle01.com/): WebRTC library for secure video conferencing.
- [IPFS](https://ipfs.io/): InterPlanetary File System for decentralized storage.
- [Filecoin](https://filecoin.io/): Decentralized storage network.
- [NFT.storage](https://nft.storage/): Decentralized storage for NFT data.
- [Lit Protocol](https://github.com/lit-protocol/lit
