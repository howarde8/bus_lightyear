# bus_lightyear

git幾個使用的tips...

1. git pull最新的master至local端
2. 以master為base開出一個新的branch => e.g. functionA-develop
3. 切換到 branch functionA-develop 進行修改
修改後...
4. 進行commit -m 'funcA init' << sample command
5. 確定無慮後進行rebase => e.g. rebase origin/master //用意在於把branch所做的修改接在最新的master的後面
rebase完成後...

6. 發出 merge request, 合併到master 的branch 端
7. done, 欣賞自己的成品
