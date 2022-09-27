var data1 = {

  "id": "Modeling Methods",
  "children": [
    {
      "id": "Classification",
      "children": [
        {
          "id": "Logistic regression"
        },
        {
          "id": "Linear discriminant analysis"
        },
        {
          "id": "Rules",
          'label': '11111'
        },
        {
          "id": "Decision trees"
        },
        {
          "id": "Naive Bayes"
        },
        {
          "id": "K nearest neighbor"
        },
        {
          "id": "Probabilistic neural network"
        },
        {
          "id": "Support vector machine"
        }
      ]
    },
    {
      "id": "Consensus",
      "children": [
        {
          "id": "Models diversity",
          "children": [
            {
              "id": "Different initializations"
            },
            {
              "id": "Different parameter choices"
            },
            {
              "id": "Different architectures"
            },
            {
              "id": "Different modeling methods"
            },
            {
              "id": "Different training sets"
            },
            {
              "id": "Different feature sets"
            }
          ]
        },
        {
          "id": "Methods",
          "children": [
            {
              "id": "Classifier selection"
            },
            {
              "id": "Classifier fusion"
            }
          ]
        },
        {
          "id": "Common",
          "children": [
            {
              "id": "Bagging"
            },
            {
              "id": "Boosting"
            },
            {
              "id": "AdaBoost"
            }
          ]
        }
      ]
    },
    {
      "id": "Regression",
      "children": [
        {
          "id": "Multiple linear regression"
        },
        {
          "id": "Partial least squares"
        },
        {
          "id": "Multi-layer feedforward neural network"
        },
        {
          "id": "General regression neural network"
        },
        {
          "id": "Support vector regression"
        }
      ]
    }
  ],
  'egde': {
    'source': 'Modeling Methods',
    'target': 'Classification',
    'label': '1111'
  }
}


data1 = JSON.parse(JSON.stringify(data1))

// const data = JSON.parse(shuju)

// console.log(data)

const container = document.getElementById('container2');
const width = container.scrollWidth;
const height = container.scrollHeight || 500;
const graph = new G6.TreeGraph({
  container: 'container2',
  width,
  height,
  linkCenter: true,
  // defaultEdge: {
  //   // ... 其他属性
  //   style: {
  //     stroke: 'black',
  //     lineWidth: 1,
  //     label: '11111'
  //     // ... 其他样式属性
  //   },
  // },
  modes: {
    default: [
      {
        type: 'collapse-expand',
        onChange: function onChange(item, collapsed) {
          const data = item.get('model');
          data.collapsed = collapsed;
          return true;
        },
      },
      'drag-canvas',
      'zoom-canvas',
      'drag-node',
    ],
  },
  defaultNode: {
    size: 26,
  },
  layout: {
    type: 'compactBox',
    direction: 'RL',
    getId: function getId(d) {
      return d.id;
    },
    getHeight: () => {
      return 26;
    },
    getWidth: () => {
      return 26;
    },
    getVGap: () => {
      return 20;
    },
    getHGap: () => {
      return 30;
    },
    radial: true,
  },
});

graph.node(function (node) {
  return {
    label: node.id,
  };
});

graph.data(data1);
graph.render();
graph.fitView();

