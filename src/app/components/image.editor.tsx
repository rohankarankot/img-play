"use client"

import React, { useState } from "react"
import RangeSlider from "./range-slider.component"
import { Accordion } from "flowbite-react"
import { useFileUploadContext } from "../context/file"

const ImageEditor = () => {
  const { cssValues, setCssValues, uploadedFile } = useFileUploadContext()
  return (
    <>
      {uploadedFile && (
        <div className="w-full mt-5">
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>brightness</Accordion.Title>
              <Accordion.Content>
                <RangeSlider
                  value={cssValues?.brightness}
                  onChange={(e: any) =>
                    setCssValues({
                      ...cssValues,
                      brightness: Number(e.target.value),
                    })
                  }
                />
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>saturate</Accordion.Title>
              <Accordion.Content>
                <RangeSlider
                  value={cssValues?.saturate}
                  onChange={(e: any) =>
                    setCssValues({
                      ...cssValues,
                      saturate: Number(e.target.value),
                    })
                  }
                />
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>contrast</Accordion.Title>
              <Accordion.Content>
                <RangeSlider
                  value={cssValues?.contrast}
                  onChange={(e: any) =>
                    setCssValues({
                      ...cssValues,
                      contrast: Number(e.target.value),
                    })
                  }
                />
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>sepia</Accordion.Title>
              <Accordion.Content>
                <RangeSlider
                  value={cssValues?.sepia}
                  onChange={(e: any) =>
                    setCssValues({
                      ...cssValues,
                      sepia: Number(e.target.value),
                    })
                  }
                />
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>invert</Accordion.Title>
              <Accordion.Content>
                <RangeSlider
                  value={cssValues?.invert}
                  onChange={(e: any) =>
                    setCssValues({
                      ...cssValues,
                      invert: Number(e.target.value),
                    })
                  }
                />
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>grayscale</Accordion.Title>
              <Accordion.Content>
                <RangeSlider
                  value={cssValues?.grayscale}
                  onChange={(e: any) =>
                    setCssValues({
                      ...cssValues,
                      grayscale: Number(e.target.value),
                    })
                  }
                />
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      )}
    </>
  )
}

export default ImageEditor
