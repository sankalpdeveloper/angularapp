import { FlatTreeControl } from '@angular/cdk/tree'
import { Component, OnInit } from '@angular/core'
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree'

@Component({
  selector: 'app-tree-structure',
  templateUrl: './tree-structure.component.html',
  styleUrls: ['./tree-structure.component.scss'],
})
export class TreeStructureComponent implements OnInit {
  transformer = (node: treeNode, level: number) => {
    return {
      expandable: node.children && node.children.length > 0,
      name: node.name,
      level: level,
    }
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable,
  )

  treeFlattener = new MatTreeFlattener(
    this.transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children,
  )
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener)
  constructor() {
    this.dataSource.data = TREE_DATA
  }
  ngOnInit(): void {}
  hasChild = (number: number, node: ExampleFlatNode) => node.expandable
}

interface treeNode {
  name: string
  children?: treeNode[]
}

const TREE_DATA: treeNode[] = [
  {
    name: 'Subject',
    children: [{ name: 'Angular' }, { name: 'React js' }, { name: 'Node js' }],
  },
  {
    name: 'Team',
    children: [
      {
        name: 'Front end',
        children: [{ name: 'Angular' }, { name: 'React' }],
      },
      {
        name: 'Back end',
        children: [{ name: 'Node' }, { name: '.net' }],
      },
    ],
  },
]

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean
  name: string
  level: number
}
