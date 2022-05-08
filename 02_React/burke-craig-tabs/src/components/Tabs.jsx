import React, { useState, useEffect } from 'react'

const tabsArray = [
  {
    label: 'Tab 1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, tempora obcaecati unde dolor repellendus mollitia obcaecati unde dolor repellendus mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, facere? Lorem ipsum dolor sit amet?'
  },
  {
    label: 'Tab 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, facere dolor sit amet consectetur adipisicing elit. Voluptate, tempora obcaecati unde dolor repellendus mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, facere? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit distinctio labore enim at?'
  },
  {
    label: 'Tab 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit distinctio labore enim at possimus sint officia recusandae fugit et dolores.'
  },
  {
    label: 'Tab 4',
    content:
      'Lorem ipsum dolor sit amet sit amet, consectetur adipisicing elit. Odit distinctio labore enim at possimus.'
  }
]

// set up an effect to run when tabs are clicked

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [tabLabel, setTabLabel] = useState('')
  const [tabContent, setTabContent] = useState('')
  //   let [tabsArray, setTabsArray] = useState(tabsArray)

  //   console.log(tabsArray)
  //   const activateTab = (e, index) => {
  //     let [...tabs] = tabsArray
  //     tabs[index].active = true
  //     tabs[activeTab].active = false
  //     setTabsArray(tabs)
  //     setActiveTab(index)
  //     setTabLabel(tabs[index].label)
  //     setTabContent(tabs[index].content)
  //   }

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/comments/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // }, [activeTab])

  const onClickHandler = (e, value) => {
    setActiveTab(value)
  }

  return (
    <>
      <section className='container'>
        {/* tabs */}
        <div className='container d-flex justify-content-center'>
          {tabsArray.map((tab, index) => {
            return (
              <div
                onClick={e => {
                  onClickHandler(e, index)
                }}
                className='border border-primary rounded'
                key={index}
                style={{
                  backgroundColor:
                    activeTab === index ? 'rgb(244, 165, 41)' : '#fff',
                  width: activeTab === index ? '200px' : '100px',
                  cursor: 'pointer'
                }}
              >
                <h3 className='pt-2'>{tab.label}</h3>
              </div>
            )
          })}
        </div>
        {/* content */}
        <div
          className='container text-start mb-2 border border-primary rounded p-3'
          style={{
            width: '500px'
            // height: '200px'
          }}
        >
          <p className='h5'>{tabsArray[activeTab].content}</p>
        </div>
      </section>
    </>
  )
}
export default Tabs
