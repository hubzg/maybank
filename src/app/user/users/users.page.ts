import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  private users

  headers = [
    { key: 'name', value: 'Name', sort: 1 },
    { key: 'email', value: 'Email', sort: 1 },
    { key: 'address', value: 'Address', sort: 1 },
    { key: 'phone', value: 'Phone Number', sort: 1 },
    { key: 'website', value: 'website', sort: 1 },
    { key: 'company.name', value: 'Company Name', sort: 1 }
  ]

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((resolvedRouteData) => {
      const users = resolvedRouteData['data'];
      this.users = users.map(item => {
        item.address = `${item.address.suite}, ${item.address.street}, ${item.address.city}, ${item.address.city} ${item.address.zipcode}`
        return item
      })
    });
  }

  sortBy(header) {
    this.users = this.users.sort((a, b) => {
      const item1 = a[header.key] ? a[header.key] : this.assignSubObject(a, header.key)
      const item2 = b[header.key] ? b[header.key] : this.assignSubObject(b, header.key)
      if (header.sort === 1) {
        return this.ascending(item1, item2)
      }
      else if (header.sort === -1) {
        return this.descending(item1, item2)
      }
    })

    header.sort === -1 ? header.sort = 1 : header.sort = -1
  }

  assignSubObject(obj, key) {
    if (!key) return obj
    const subObjKey = key.split('.')
    return this.assignSubObject(obj[subObjKey.shift()], subObjKey.join('.'))
  }

  ascending(a, b) {
    return a.localeCompare(b)
  }

  descending(a, b) {
    return b.localeCompare(a)
  }

}
