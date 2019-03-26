/** @jsx h */

import h from '../../../helpers/h'
import { Set } from 'immutable'

export const input = (
  <value>
    <document>
      <paragraph>
        wo<anchor />
        <mark type="a">rd</mark>
      </paragraph>
      <paragraph>
        <paragraph>
          <mark type="b">middle</mark>
        </paragraph>
        <paragraph />
      </paragraph>
      <paragraph>unmarked</paragraph>
      <paragraph>
        <mark type="c">
          an<focus />other
        </mark>
        <mark type="d">unselected marked text</mark>
      </paragraph>
    </document>
  </value>
)

export default function({ document, selection }) {
  return document.getActiveMarksAtRange(selection)
}

export const output = Set()
