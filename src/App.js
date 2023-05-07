import React, { useState, useEffect } from "react";
import Web3 from "web3";
import MyContract from "./contracts/Motor.json";
import Image from 'react-bootstrap/Image'
import './App.css'
import { Button } from "react-bootstrap";
function App() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState(0);
  const [contractBalance, setContractBalance] = useState(0);
  useEffect(() => {
    async function setupWeb3() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();
          setWeb3(web3);
        } catch (error) {
          console.error(error);
        }
      }
      // Legacy dapp browsers, should remove in future
      else if (window.web3) {
        setWeb3(new Web3(window.web3.currentProvider));
      }
      // Non-dapp browsers
      else {
        alert("You have to install MetaMask !");
      }
    }
    setupWeb3();
  }, []);

  useEffect(() => {
    async function loadAccounts() {
      if (web3) {
        const accounts = await web3.eth.getAccounts();
        setAccounts(accounts);
        if (accounts.length > 0) {
          const balance = await web3.eth.getBalance(accounts[0]);
          const contractBal = await web3.eth.getBalance("0x403769Be03e3cD39b4E4066E69c3E64ac0231830");
          setContractBalance(web3.utils.fromWei(contractBal, "ether"));
          setBalance(web3.utils.fromWei(balance, "ether"));
        }
      }
    }
    loadAccounts();
  }, [web3]);

  useEffect(() => {
    async function loadContract() {
      if (web3) {
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = MyContract.networks[networkId];
        if (deployedNetwork) {
          const instance = new web3.eth.Contract(
            MyContract.abi,
            deployedNetwork.address
          );
          setContract(instance);
        } else {
          alert("MyContract not deployed to detected network.");
        }
      }
    }
    loadContract();
  }, [web3]);

  async function motorRent() {
    if (contract) {
      const price = await contract.methods.price().call();
      const weiValue = price;
      await contract.methods.rent().send({
        from: accounts[0],
        value: weiValue
      });
      const balance = await contract.methods.balances(accounts[0]).call();
      console.log(`New balance: ${balance}`);
      window.location.reload();
    }
  }
  async function motorRent2() {
    if (contract) {
      const price = await contract.methods.price2().call();
      const weiValue = price;
      await contract.methods.rent2().send({
        from: accounts[0],
        value: weiValue
      });
      const balance = await contract.methods.balances(accounts[0]).call();
      console.log(`New balance: ${balance}`);
      window.location.reload();
    }
  }
  async function motorRent3() {
    if (contract) {
      const price = await contract.methods.price3().call();
      const weiValue = price;
      await contract.methods.rent3().send({
        from: accounts[0],
        value: weiValue
      });
      const balance = await contract.methods.balances(accounts[0]).call();
      console.log(`New balance: ${balance}`);
      window.location.reload();
    }
  }
  async function motorRent4() {
    if (contract) {
      const price = await contract.methods.price4().call();
      const weiValue = price;
      await contract.methods.rent4().send({
        from: accounts[0],
        value: weiValue
      });
      const balance = await contract.methods.balances(accounts[0]).call();
      console.log(`New balance: ${balance}`);
      window.location.reload();
    }
  }
  async function motorRent5() {
    if (contract) {
      const price = await contract.methods.price5().call();
      const weiValue = price;
      await contract.methods.rent5().send({
        from: accounts[0],
        value: weiValue
      });
      const balance = await contract.methods.balances(accounts[0]).call();
      console.log(`New balance: ${balance}`);
      window.location.reload();
    }
  }
  async function motorRent6() {
    if (contract) {
      const price = await contract.methods.price6().call();
      const weiValue = price;
      await contract.methods.rent6().send({
        from: accounts[0],
        value: weiValue
      });
      const balance = await contract.methods.balances(accounts[0]).call();
      console.log(`New balance: ${balance}`);
      window.location.reload();
    }
  }

  return (
      <div className="text">
      <section className="bg-tan" style={{ height: "470vh" }}>
      <div className="container p-5 text-center">
      
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 text-center" >
          <h1 >Motorcycle Rental</h1>
          <hr></hr>
          <h3>Etherium Balance: {balance} ETH</h3>
          <hr></hr>
                  
                  <Image src="https://www.lexhaminsurance.co.uk/media/jrxni2qe/ajs-firefox.jpg" height={225}/>
                <div className="container p-2 text-center">
                <h5>50cc Scooter Motorcycle (Automatic Transmission)</h5>
                <h5>1 ETH</h5>
                <Button onClick={motorRent}>Rent</Button>
                </div>
                <hr></hr>
                  <Image src="https://3.bp.blogspot.com/-HpYnSYDb12w/Wrrz8T5Zz0I/AAAAAAAAwhY/OFugWWGWym8Vkhn2WhC5KD-G_K5r2DgEgCLcBGAs/s1600/yamaha_sight.jpg" height={275} />
                <div className="container p-2 text-center">
                <h5>100cc Underbone Motorcycle (Manual Transmission)</h5>
                <h5>3 ETH</h5>
                <Button onClick={motorRent2}>Rent</Button>
                </div>
                <hr></hr>
                <Image src="https://mc.suzuki.com.ph/app/uploads/2023/02/Raider-R150-Fi_Pearl-Ash-Blue_thumbnail.png" height={275}/>
                <div className="container p-2 text-center">
                <h5>150cc Underbone Motorcycle (Manual Transmission)</h5>
                <h5>6 ETH</h5>
                <Button onClick={motorRent3}>Rent</Button>
                </div>
                <hr></hr>
                <Image src="https://bikeadvice.in/wp-content/uploads/2019/12/Honda-CB160R-new-retro-scrambler.jpg" height={275}/>
                <div className="container p-2 text-center">
                <h5>200cc Underbone Motorcycle (Manual Transmission)</h5>
                <h5>9 ETH</h5>
                <Button onClick={motorRent4}>Rent</Button>
                </div>
                <hr></hr>
                <Image src="https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-photo/original/2022-cfmoto-400nk-62f086a1d5014.png" height={260}/>
                <div className="container p-2 text-center">
                <h5>250cc Underbone Motorcycle (Manual Transmission)</h5>
                <h5>12 ETH</h5>
                <Button onClick={motorRent5}>Rent</Button>
                </div>
                <hr></hr>
                <Image src="https://kawasakileisurebikes.ph/assets/img-motorcycles/selected/images/23EX400L-44SBK1DRF3CG-A.jpg" height={300}/>
                <div className="container p-2 text-center">
                <h5>400cc Big Bike Motorcycle (Manual Transmission) </h5>
                <h5>20 ETH</h5>
                <Button onClick={motorRent6}>Rent</Button>
                </div>
                <br></br>
                <br></br>
                <hr></hr>
                <h3> Etherium Spent : {contractBalance} ETH</h3>
                <hr></hr>
                </div>
          </div>
        </div>

    </section>
    </div>
  );
}

export default App;
