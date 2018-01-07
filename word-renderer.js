import Reconciler from "react-reconciler";
import emptyObject from "fbjs/lib/emptyObject";

import { createElement } from "./create-element";

module.exports.WordRenderer = WordRenderer;

const WordRenderer = Reconciler({
  appendInitialChild(parentInstance, child) {
    if (parentInstance.appendInitialChild) {
      parentInstance.appendChild(child);
    } else {
      parentInstance.document = child;
    }
  },

  /**
   * Create a new component instance
   * @param {string|Function} type  example: 'Text'
   * @param {*} props example: {children: 'Hello world'}
   * @param {*} internalInstanceHandle example: 'WordDocument'
   * @example
   * ```js
   * <Text>Hello world</Text>
   * ```
   */
  createInstance(type, props, internalInstanceHandle) {
    return createElement(type, props, internalInstanceHandle);
  },

  createTextInstance(type, rootContainerInstance, internalInstanceHandle) {
    return text;
  },

  finalizeInitialChildren(wordElement, type, props) {
    return false;
  },

  getPublicInstance(inst) {
    return inst;
  },

  prepareForCommit() {},

  prepareUpdate(wordElement, type, oldProps, newProps) {
    return true;
  },

  resetAfterCommit() {},

  resetTextContent() {},

  getRootHostContext() {},

  getChildHostContext() {
      return emptyObject;
  },

  shouldSetTextContent(type, props) {
    return false;
  },

  now: () => performance.now(),

  useSyncScheduling: true,

  mutation: {
    appendChild(parentInstance, child) {
      if (parentInstance.appendChild) {
        parentInstance.appendChild(child);
      } else {
        parentInstance.document = child;
      }
    },

    appendChildToContainer(parentInstance, child) {
      if (parentInstance.appendChild) {
        parentInstance.appendChild(child);
      } else {
        parentInstance.document = child;
      }
    },

    removeChild(parentInstance, child) {
        parentInstance.removeChild(child);
    },

    removeChildFromContainer(parentInstance, child) {
        parentInstance.removeChild(child);
    },

    insertBefore(parentInstance, child, beforeChild) {

    },

    commitUpdate(instance, updatePayload, type, oldProps, newProps) {
        
    },

    commitMount(instance, updatePayload, type, oldProps, newProps) {

    },

    commitTextUpdate(textInstance, oldText, newText) {
        textInstance.children = newText;
    }
  }
});
