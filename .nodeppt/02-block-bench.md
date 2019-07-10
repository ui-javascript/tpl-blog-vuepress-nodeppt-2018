title: Blockbench Notes
speaker: aaron guan
theme: light
transition: slide2
headFiles: /static/css/light.css

[slide]

# Blockbench notes
## aaron guan

[slide]

## CONTENTS

1. Abstract
2. Introduction
3. Private Blockchains
4. Blockbench Design
5. Performance Benchmark
6. Discussion

[slide]

## ABSTRACT

- Introduction of Blockchain
- Description of Blockbench

[slide]

## 1. INTRODUCTION

- Introduction of Bitcoin, Ethereum
- Three Challenges

	1. the **Consensus Layer**, **Data Model** and **Execution Layer**
	2. based on **Ethereum**, **Parity** and **Hyperledger**
	3. design and run **Transaction** and **Analytics** workloads
- several dimensions: 

	1. **Throughput**
	2. **Latency**
	3. **Scalability**
	4. **Fault Tolerance**

[slide]

## 2. PRIVATE BLOCKCHAINS

- Blockchain transactions: **ACID**, two-phase commit
- Bitcoin: **PoW**, miner, fork
- Ethereum: **Turing complete state machines**, EVM
- Private blockchain: 
	- Distributed fault-tolerant consensus: **Zab, Raft, Paxos, PBFT**
	- Variants: **Parity, Ripple, ErisDB**

[slide]

# 3. BLOCKBENCH DESIGN

[slide]

[magic data-transition="horizontal3d"]

## 3.1 Blockchain Layers

-----

![](/static/images/Blockbench/Figure3.png)

=====

-----

1. Consensus: examples of consensus algorithms
2. Data model: **smart contract, Merkle tree, RPC**
3. Execution layer: differences in **programming languages and data types**
4. Application layer: **crypto-currency, Decentralized Autonomous Organization**

=====

[/magic]

[slide]

[magic data-transition="vertical3d"]

## 3.2 BLOCKBENCH Implementation

-----

![](/static/images/Blockbench/Figure4.png)

=====

-----

- support: 
	- Ethereum
	- Parity
	- Hyperledger
- **IBlockchainConnector**: 
	- deploying application
	- invoking
	- querying the blockchain’s states
- **IWorkloadConnector**:
	- generate workload
- Asynchronous Driver

=====

[/magic]

[slide]

[magic data-transition="cover-circle"]

## 3.3 Evaluation Metrics

-----

1. **Throughput**

	- the **number** of successful transactions per second.

2. **Latency**

	- the **response time** per transaction.

3. **Scalability**

	- the **changes** in throughput and latency when increasing number of nodes and workloads.

4. **Fault tolerance**

	- how the throughput and latency **change** during node failure.
	- **three** failure modes

		1. a node simply stops
		2. network delay
		3. random response

=====

-----

 - Security metrics

=====

[/magic]

[slide]

[magic data-transition="zoomin"]

-----

## 3.4 Workloads

- 2 major categories:
	- macro benchmark
	- micro benchmark

=====

-----

- smart contracts for all workloads summarized below:

| Smart contracts | Description | Type|
|:----|:----|:----|
|YCSB|Key-value store|macro|
|Smallbank|OLTP workload|macro|
|EtherId|Name registrar contract|macro|
|Doubler|Ponzi scheme|macro|
|WavesPresale|Crowd sale|macro|
|VersionKVStore|Keep state’s versions (Hyperledger only)|micro|
|IOHeavy|Read and write a lot of data|micro|
|CPUHeavy|Sort a large array|micro|
|DoNothing|Simple contract, do nothing|micro|

=====

[/magic]

[slide]

[magic data-transition="zoomin"]

-----

# 4. PERFORMANCE BENCHMARK

=====

-----

- *Hyperledger* **performs** consistently **better** than *Ethereum* and *Parity* across the benchmarks. But it fails to scale up to more than 16 nodes.
- *Ethereum* and *Parity* are **more resilient to node failures**, but they are vulnerable to security attacks that forks the blockchain.
- The **main bottlenecks** in *Hyperledger* and *Ethereum* are the **consensus protocols**, but for *Parity* the **bottleneck** is caused by **transaction signing**.
- *Ethereum* and *Parity* incur **large overhead** in terms of **memory and disk usage**. Their **execution engine** is also **less efficient** than that of *Hyperledger*.
- *Hyperledger*’s **data model** is **low level**, but its flexibility enables customized optimization for analytical queries of the blockchain data.

=====

[/magic]

[slide]

## 4.1 Macro benchmarks

