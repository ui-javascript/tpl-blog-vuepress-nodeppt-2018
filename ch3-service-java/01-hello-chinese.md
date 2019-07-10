---
title: Java技术1
lang: zh-CN
datetime: 2018-06-18
meta:
  - name: description
    content: Prettier 
  - name: keywords
    content: Prettier,ESLint,Vue,格式化,美化代码
---

<!-- more -->

# 基础

- 数据类型 <http://www.yiibai.com/java_data_type/>
- JCFInternals 深入理解Java集合框架 https://github.com/CarpenterLee/JCFInternals
- Java 数据结构 <http://www.runoob.com/java/java-data-structures.html>

  - ArrayList | Vector | Stack(后进先出的栈)
  - Map | Dictionary | Hashtable | Properties
  - BitSet

- Java 集合框架-教程
  - <http://www.runoob.com/java/java-collections.html>
- Java集合（1）一 集合框架
    - https://juejin.im/post/5a2f80a3f265da430406962a

```
Collection

Map 
Map.Entry 
SortedMap

Set
SortedSet

// 抽象类
在抽象类层面都没有涉及具体的数据结构和算法，
只对操作这些数据结构的方法做了基本实现

// 历史遗留
Vetor,Stack,Hashtable,Properties

HashMap 
ArrayList
```

![](http://www.runoob.com/wp-content/uploads/2014/01/java-coll.png)

# 集合框架

- [Java集合框架常见面试题总结](https://github.com/Snailclimb/JavaGuide/blob/master/Java%E7%9B%B8%E5%85%B3/Java%E9%9B%86%E5%90%88%E6%A1%86%E6%9E%B6%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E6%80%BB%E7%BB%93.md)

- [这几道Java集合框架面试题几乎必问](https://github.com/Snailclimb/JavaGuide/blob/master/Java%E7%9B%B8%E5%85%B3/%E8%BF%99%E5%87%A0%E9%81%93Java%E9%9B%86%E5%90%88%E6%A1%86%E6%9E%B6%E9%9D%A2%E8%AF%95%E9%A2%98%E5%87%A0%E4%B9%8E%E5%BF%85%E9%97%AE.md)

- List，Set,Map区别

```jsx
List 有序
Set 唯一
Map k-v
```

- Arraylist 与 LinkedList 

```jsx
Arraylist底层使用的是数组
存读数据效率高，插入删除特定位置效率低

LinkedList 底层使用的是双向循环链表数据结构
插入，删除效率特别高

经常需要插入删除元素时建议选用LinkedList.
一般程序只用Arraylist就够用了 
Arraylist是使用最多的集合类。
```

- ArrayList 与 Vector 

```
Vector类的所有方法都是同步的
```

- HashMap和ConcurrentHashMap
- HashMap 和 Hashtable 

```
HashMap是非线程安全的
HashTable是线程安全的

HashTable中put进的键值只要有一个null，直接抛出NullPointerException
```

- HashSet和HashMap

# 源码分析 

- ArrayList源码 
    - https://github.com/Snailclimb/JavaGuide/blob/master/Java%E7%9B%B8%E5%85%B3/ArrayList.md
- HashMap源码 
    - https://github.com/Snailclimb/JavaGuide/blob/master/Java%E7%9B%B8%E5%85%B3/HashMap.md
