﻿using System.Collections.Generic;

namespace AdminTemplate.Provider
{
    public class DefaultListProvider : IListProvider
    {
        private static Dictionary<string, IEnumerable<ListItem>> listItems
            = new Dictionary<string, IEnumerable<ListItem>>();

        static DefaultListProvider()
        {
            listItems.Add("Gender", new ListItem[]
            {
                new ListItem(){ Text = "男", Value = "M"},
                new ListItem(){ Text = "女", Value = "F"}
            });

            listItems.Add("Education", new ListItem[]
            {
                new ListItem(){ Text = "高中", Value = "H" },
                new ListItem(){ Text = "大学本科", Value = "B" },
                new ListItem(){ Text = "硕士", Value = "M" },
                new ListItem(){ Text = "博士", Value = "D" },
            });

            listItems.Add("Department", new ListItem[]
            {
                new ListItem(){ Text = "第一开发部", Value = "DEV01" },
                new ListItem(){ Text = "第二开发部", Value = "DEV02" },
                new ListItem(){ Text = "第三开发部", Value = "DEV03" },
            });

            listItems.Add("Skill", new ListItem[]
            {
                new ListItem(){ Text = "C#", Value = "CSharp" },
                new ListItem(){ Text = "ASP.NET", Value = "AspNet" },
                new ListItem(){ Text = "ADO.NET", Value = "AdoNet" }
            });
        }

        public IEnumerable<ListItem> GetListItems(string listName)
        {
            IEnumerable<ListItem> items;
            if (listItems.TryGetValue(listName, out items))
            {
                return items;
            }
            return new ListItem[0];
        }
    }
}