---
title: 文本编辑器Vim
date: 2018-10-27
category: cs
tags: ["linux"]

---

## Vim常用操作

### 简介

一个功能强大的全屏幕文本编辑器，作用是建立、编辑、显示文本文件。没有菜单，只有命令。  
建议在编辑一些配置文件和小脚本的时候使用。

### 工作模式

![](https://pic.rhinoc.top/15406373260572.jpg)

**插入模式：**

> 任何操作都要`ESE`回到命令模式。

*   `a` 在光标所在字符后插入
*   `A` 在光标所在行尾后插入
*   `i` 在光标所在字符前插入
*   `I` 在光标所在行首前插入
*   `o` 在光标下插入新行
*   `O` 在光标上插入新行

**定位命令：**

*   `:set nu` 设置行号
*   `:set nonu` 取消行号
*   `gg` 到第一行
*   `G` 到最后一行
*   `nG` 到第n行
*   `:n` 到第n行
*   `$` 移至行尾
*   `0` 移至行首

**删除命令：**
* `x` 删除光标所在处字符
* `nx` 删除光标所在处后n个字符
* `dd` 删除光标所在行
* `ndd` 删除光标所在后n行
* `dg` 删除光标所在行到末尾
* `d` 删除光标所在处到行尾
* `:n1,n2d` 删除指定范围的行

**复制和剪切命令：**
* `yy` 复制当前行
* `nyy` 复制当前行以下n行
* `dd` 剪切当前行
* `ndd` 剪切当前行以下n行
* `p` 粘贴在当前光标所在行下
* `P` 粘贴在当前光标所在行上 

**替换和取消命令：**

* `r` 取代光标所在处字符
* `R` 从光标所在处开始替换字符，按`esc`结束
* `u` 取消上一步操作

**搜索和替换命令：**

* `/string`搜索指定字符串

> `set ic` 设置搜索时忽略大小写  
> `set noic` 取消搜索时忽略大小写

* `n` 搜索指定字符串的下一个出现位置
* `:%s/old/new/g` 全文替换指定字符串
    * `%s`表示全文
* `:n1,n2s/old/new.g` 在一定范围内替换指定字符串
    * `n1`表示起始行 `n2` 表示终止行

**保存和退出命令：**

*   `:w` 保存修改
*   `:w new_filename` 另存为指定文件
*   `wq` 保存修改并退出
*   `ZZ` 快捷键，保存修改并退出
*   `q!` 不保存修改并退出
*   `wq!` 保存修改并退出（文件所有者及root可使用）

## Vim使用技巧

*   导入命令执行结果：`r !命令`
*   定义快捷键 `map 快捷键 触发命令` （其中快捷键不是输入而是直接按下）
    *   eg. `map ^P I#<esc>` 注释光标所在行
    *   eg. `map ^B 0x` 取消注释
    *   eg. `:n1,n2s/^/#/g` 连续行注释（`^`表示行首）
*   替换 `:ab mymail rhinoc@outlook.com` （重启后失效，除非写在`~/.vimrc`配置文件中）