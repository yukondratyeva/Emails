import React from 'react'
import { resolveElementWithProps, useProps } from '@figmint/react'

interface OTPLatinProps {
  elementProps?: {
    [elementId: string]: Record<string, any> & {
      className?: string
      style?: React.CSSProperties
      as?: React.ElementType
    }
  }
}

const OTPLatin = (incomingProps: OTPLatinProps) => {
  const { props } = useProps({} as OTPLatinProps, incomingProps)

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
          'data-figma-id': '4408:26368',
          className:
            'flex pb-[24px] flex-col items-start gap-[12px] self-stretch rounded-[24px] h-[100%] absolute top-[0px] left-[0px] w-[100%]',
        },
        render(
          'div',
          {
            'data-figma-id': '4551:80342',
            className:
              'flex items-start gap-[8px] self-stretch h-[auto] relative',
          },
          render(
            'div',
            {
              'data-figma-id': '4551:80343',
              className:
                'flex justify-center items-center rounded-[16px] w-[56px] h-[64px] relative',
              style: { background: '--tui-background-general' },
            },
            render(
              'p',
              {
                'data-figma-id': '4551:80344',
                className:
                  'text-[18px] not-italic font-bold leading-[120%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                style: {
                  color: '--tui-front-primary',
                  'font-family': 'Tahoma',
                },
              },
              '6'
            )
          ),
          render(
            'div',
            {
              'data-figma-id': '4551:80345',
              className:
                'flex justify-center items-center rounded-[16px] w-[56px] h-[64px] relative',
              style: { background: '--tui-background-general' },
            },
            render(
              'p',
              {
                'data-figma-id': '4551:80346',
                className:
                  'text-[18px] not-italic font-bold leading-[120%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                style: {
                  color: '--tui-front-primary',
                  'font-family': 'Tahoma',
                },
              },
              '9'
            )
          ),
          render(
            'div',
            {
              'data-figma-id': '4551:80347',
              className:
                'flex justify-center items-center rounded-[16px] w-[56px] h-[64px] relative',
              style: { background: '--tui-background-general' },
            },
            render(
              'p',
              {
                'data-figma-id': '4551:80348',
                className:
                  'text-[18px] not-italic font-bold leading-[120%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                style: {
                  color: '--tui-front-primary',
                  'font-family': 'Tahoma',
                },
              },
              '6'
            )
          ),
          render(
            'div',
            {
              'data-figma-id': '4551:80349',
              className:
                'flex justify-center items-center rounded-[16px] w-[56px] h-[64px] relative',
              style: { background: '--tui-background-general' },
            },
            render(
              'p',
              {
                'data-figma-id': '4551:80350',
                className:
                  'text-[18px] not-italic font-bold leading-[120%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                style: {
                  color: '--tui-front-primary',
                  'font-family': 'Tahoma',
                },
              },
              '9'
            )
          ),
          render(
            'div',
            {
              'data-figma-id': '4551:80376',
              className:
                'flex justify-center items-center rounded-[16px] w-[56px] h-[64px] relative',
              style: { background: '--tui-background-general' },
            },
            render(
              'p',
              {
                'data-figma-id': '4551:80377',
                className:
                  'text-[18px] not-italic font-bold leading-[120%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                style: {
                  color: '--tui-front-primary',
                  'font-family': 'Tahoma',
                },
              },
              '9'
            )
          )
        ),
        render(
          'p',
          {
            'data-figma-id': '4551:80392',
            className:
              'text-[var(--font-size-P2, 12px)] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
            style: { color: '--tui-front-secondary', 'font-family': 'Tahoma' },
          },
          'Expires in 5 minutes. Do not share'
        )
      )}
    </>
  )
}

export default OTPLatin
