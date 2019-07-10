title: The Raft Consensus Algorithm
speaker: aaron
theme: light
transition: slide2
headFiles: /static/css/light.css

[slide]

# The Raft Consensus Algorithm

[slide]

## CONTENTS

1. What is Raft ?
2. Appliacation ...
3. Let us Play it !

[slide]

## What is Raft?

- consensus algorithm 
- equivalent to **Paxos**
- designed to be **easy to understand**

[slide]

## Raft User Study

![](/static/images/Raft/3-1.png)

[slide]

## Raft Overview

1. **Leader election**

	- Select one of the servers to act as cluster leader
	- Detect crashes, choose new leader

2. **Log replication**

	- Leader takes commands from clients, appends them to its log
	- Leader replicates it log to other servers

3. **Safety**

	- Only a server with an up-to-date log can become leader

[slide]

## Application 

- Consensus algorithm
	- Paxos 、 Raft
- Consensus service	
	- Zookeeper 、 etcd

[slide]

# RAFTSCOPE VISUALIZATION

[slide]

<style>
.current{
	padding: 0px;
}
.slide-wrapper{
	max-width: 1200px !important;
}
iframe{
    height: 700px !important;
}
</style>
<iframe src="http://thesecretlivesofdata.com/raft/"></iframe>
