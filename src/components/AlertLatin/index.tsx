import React from 'react'
import { resolveElementWithProps, useProps } from '@figmint/react'

interface AlertLatinProps {
  elementProps?: {
    [elementId: string]: Record<string, any> & {
      className?: string
      style?: React.CSSProperties
      as?: React.ElementType
    }
  }
}

const AlertLatin = (incomingProps: AlertLatinProps) => {
  const { props } = useProps({} as AlertLatinProps, incomingProps)

  const render = (
    defaultTag: string,
    elementAttrs: Record<string, any>,
    ...children: any[]
  ) => resolveElementWithProps(null, props, defaultTag, elementAttrs, children)
  return (
    <>
      <></>
      {render(
        'div',
        {
          'data-figma-id': '4250:62863',
          className:
            'flex pb-[24px] items-center rounded-[24px] w-[100%] h-[100%] absolute top-[0px] left-[0px]',
        },
        render(
          'div',
          {
            'data-figma-id': '4266:16803',
            className:
              'flex py-[16px] px-[24px] items-center gap-[16px] flex-1 rounded-[var(--Rounded-corners-Boxes-S-M, 12px)] h-[auto] relative',
            style: { background: '--tui-background-negative-muted' },
          },
          render(
            'p',
            {
              'data-figma-id': '4250:62843',
              className:
                'flex-1 text-[14px] not-italic font-normal leading-[150%] tracking-[0.2px] h-[auto] relative m-[0]',
              style: {
                color: '--tui-front-primary',
                'font-family': 'Tahoma',
                'white-space': 'normal',
                'word-wrap': 'break-word',
              },
            },
            'Make a payment to continue using your card'
          )
        )
      )}
    </>
  )
}

export default AlertLatin
