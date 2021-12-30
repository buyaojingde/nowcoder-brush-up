#include "stdio.h"
#include <iostream>
#include <vector>
#include <set>
using namespace std;

void main()
{
	int n;
	int a[10];
	int tmp;
	while (cin >> n) {
		vector<int> vs;
		set<int> s;
		for (size_t i = 0; i < n; i++)
		{
			cin >> a[i];
		}
		for (size_t i = 0; i < n; i++)
		{
			cin >> tmp;
			for (size_t j = 0; j < tmp; j++)
			{
				vs.push_back(a[i]);
			}
		}
		s.insert(0);
		for (size_t i = 0; i < vs.size(); i++)
		{
			set<int> t(s);  // 用复制构造函数初始化t
			for (auto j = t.begin(); j != t.end(); j++)
			{
				s.insert(*j + vs[i]);
			}
		}
		cout << s.size() << endl;
	}
}