import React from 'react'
import { resolveElementWithProps, useProps } from '@figmint/react'

interface PaymentPlanLatinProps {
  '1'?: boolean
  '2'?: boolean
  '3'?: boolean
  '4'?: boolean
  '5'?: boolean
  '6'?: boolean
  '7'?: boolean
  '8'?: boolean
  '9'?: boolean
  elementProps?: {
    [elementId: string]: Record<string, any> & {
      className?: string
      style?: React.CSSProperties
      as?: React.ElementType
    }
  }
}

const PaymentPlanLatin = (incomingProps: PaymentPlanLatinProps) => {
  const { props } = useProps(
    {
      '1': true,
      '2': true,
      '3': false,
      '4': false,
      '5': false,
      '6': false,
      '7': false,
      '8': false,
      '9': true,
    } as PaymentPlanLatinProps,
    incomingProps
  )

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
          'data-figma-id': '4273:16165',
          className:
            'flex items-center gap-[10px] self-stretch h-[100%] absolute top-[0px] left-[0px] w-[100%]',
        },
        render(
          'div',
          {
            'data-figma-id': '4273:16117',
            className: 'flex flex-col items-start flex-1 h-[auto] relative',
          },
          props['1'] &&
            render(
              'div',
              {
                'data-figma-id': '4275:16434',
                className:
                  'flex items-start gap-[12px] self-stretch h-[auto] relative',
              },
              render(
                'div',
                {
                  'data-figma-id': 'I4275:16434;4273:16356',
                  className:
                    'flex pt-[3px] pr-[0] pb-[2px] pl-[0] flex-col items-center gap-[4px] w-[24px] h-[auto] relative',
                },
                render(
                  'div',
                  {
                    'data-figma-id': 'I4275:16434;4273:16356;4275:16391',
                    className:
                      'flex justify-center items-center w-[20px] h-[20px] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4275:16434;4273:16356;4275:16391;4489:28433',
                      className: 'w-[16px] h-[16px] relative',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4275:16434;4273:16356;4275:16391;4489:28433;170:146',
                        className:
                          'absolute top-[4.504638671875px] left-[3.3504638671875px]',
                      },
                      <svg
                        width='10'
                        height='8'
                        viewBox='0 0 10 8'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9.98926 1.17871L4.85059 6.31641L4.85156 6.31738L3.67285 7.49512L2.49414 6.31738V6.31641L0 3.82227L1.17871 2.64355L3.67285 5.1377L8.81055 0L9.98926 1.17871Z'
                          fill='#F5F4F2'
                        />
                      </svg>
                    )
                  ),
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4275:16434;4273:16356;4275:16391;4489:28434',
                      className:
                        'absolute top-[0px] bottom-[0px] left-[0px] right-[0px]',
                    },
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle cx='10' cy='10' r='10' fill='#D6D3D0' />
                    </svg>
                  )
                ),
                render(
                  'div',
                  {
                    'data-figma-id': 'I4275:16434;4273:16356;4271:28348',
                    className:
                      'flex py-[0] px-[11px] justify-center items-center gap-[10px] self-stretch h-[auto] relative',
                  },
                  render('div', {
                    'data-figma-id': 'I4275:16434;4273:16356;4271:28349',
                    className: 'rounded-[7px] w-[2px] h-[19px] relative',
                    style: {
                      background: {
                        type: 'template',
                        parts: [
                          'linear-gradient(to bottom, ',
                          'rgba(214, 211, 208, 1)',
                          ', ',
                          'rgba(214, 211, 208, 1)',
                          ')',
                        ],
                      },
                    },
                  })
                )
              ),
              render(
                'div',
                {
                  'data-figma-id': 'I4275:16434;4273:16367',
                  className:
                    'flex py-[2px] px-[0] items-start gap-[12px] flex-1 self-stretch relative',
                },
                render(
                  'p',
                  {
                    'data-figma-id': 'I4275:16434;4273:16368',
                    className:
                      'flex-1 text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] h-[auto] relative m-[0]',
                    style: {
                      color: '--tui-front-primary',
                      'font-family': 'Tahoma',
                      'white-space': 'normal',
                      'word-wrap': 'break-word',
                    },
                  },
                  'Title'
                ),
                render(
                  'p',
                  {
                    'data-figma-id': 'I4275:16434;4273:16369',
                    className:
                      'text-right text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                    style: {
                      color: '--tui-front-primary',
                      'font-family': 'Tahoma',
                    },
                  },
                  'Subtitle'
                )
              )
            ),
          props['2'] &&
            render(
              'div',
              {
                'data-figma-id': '4275:16465',
                className:
                  'flex items-start gap-[12px] self-stretch h-[auto] relative',
              },
              render(
                'div',
                {
                  'data-figma-id': 'I4275:16465;4273:16356',
                  className:
                    'flex pt-[3px] pr-[0] pb-[2px] pl-[0] flex-col items-center gap-[4px] w-[24px] h-[auto] relative',
                },
                render(
                  'div',
                  {
                    'data-figma-id': 'I4275:16465;4273:16356;4275:16391',
                    className:
                      'flex justify-center items-center w-[20px] h-[20px] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4275:16465;4273:16356;4275:16391;4489:28433',
                      className: 'w-[16px] h-[16px] relative',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4275:16465;4273:16356;4275:16391;4489:28433;170:146',
                        className:
                          'absolute top-[4.504638671875px] left-[3.3504638671875px]',
                      },
                      <svg
                        width='10'
                        height='8'
                        viewBox='0 0 10 8'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9.98926 1.17871L4.85059 6.31641L4.85156 6.31738L3.67285 7.49512L2.49414 6.31738V6.31641L0 3.82227L1.17871 2.64355L3.67285 5.1377L8.81055 0L9.98926 1.17871Z'
                          fill='#F5F4F2'
                        />
                      </svg>
                    )
                  ),
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4275:16465;4273:16356;4275:16391;4489:28434',
                      className:
                        'absolute top-[0px] bottom-[0px] left-[0px] right-[0px]',
                    },
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle cx='10' cy='10' r='10' fill='#D6D3D0' />
                    </svg>
                  )
                ),
                render(
                  'div',
                  {
                    'data-figma-id': 'I4275:16465;4273:16356;4271:28348',
                    className:
                      'flex py-[0] px-[11px] justify-center items-center gap-[10px] self-stretch h-[auto] relative',
                  },
                  render('div', {
                    'data-figma-id': 'I4275:16465;4273:16356;4271:28349',
                    className: 'rounded-[7px] w-[2px] h-[19px] relative',
                    style: {
                      background: {
                        type: 'template',
                        parts: [
                          'linear-gradient(to bottom, ',
                          'rgba(214, 211, 208, 1)',
                          ', ',
                          'rgba(214, 211, 208, 1)',
                          ')',
                        ],
                      },
                    },
                  })
                )
              ),
              render(
                'div',
                {
                  'data-figma-id': 'I4275:16465;4273:16367',
                  className:
                    'flex py-[2px] px-[0] items-start gap-[12px] flex-1 self-stretch relative',
                },
                render(
                  'p',
                  {
                    'data-figma-id': 'I4275:16465;4273:16368',
                    className:
                      'flex-1 text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] h-[auto] relative m-[0]',
                    style: {
                      color: '--tui-front-primary',
                      'font-family': 'Tahoma',
                      'white-space': 'normal',
                      'word-wrap': 'break-word',
                    },
                  },
                  'Title'
                ),
                render(
                  'p',
                  {
                    'data-figma-id': 'I4275:16465;4273:16369',
                    className:
                      'text-right text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                    style: {
                      color: '--tui-front-primary',
                      'font-family': 'Tahoma',
                    },
                  },
                  'Subtitle'
                )
              )
            ),
          props['9'] &&
            render(
              'div',
              {
                'data-figma-id': '4275:16682',
                className:
                  'flex items-start gap-[12px] self-stretch h-[auto] relative',
              },
              render(
                'div',
                {
                  'data-figma-id': 'I4275:16682;4489:29258',
                  className:
                    'flex pt-[2px] flex-col items-center w-[24px] h-[48px] relative',
                },
                render(
                  'div',
                  {
                    'data-figma-id': 'I4275:16682;4489:29258;4275:16384',
                    className: 'justify-center w-[20px] h-[20px] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4275:16682;4489:29258;4275:16384;4489:28457',
                      className:
                        'flex pt-[4px] pr-[2px] pb-[2px] pl-[2px] items-center gap-[10px] w-[16px] h-[18px] absolute top-[0px] left-[2px]',
                    },
                    render('div', {
                      'data-figma-id':
                        'I4275:16682;4489:29258;4275:16384;4489:28458',
                      className: 'rounded-[99999px] w-[12px] h-[12px] relative',
                      style: { background: '--tui-background-accent-strong' },
                    })
                  )
                )
              ),
              render(
                'div',
                {
                  'data-figma-id': 'I4275:16682;4489:29259',
                  className:
                    'flex pb-[2px] items-start gap-[12px] flex-1 self-stretch relative',
                },
                render(
                  'p',
                  {
                    'data-figma-id': 'I4275:16682;4489:29260',
                    className:
                      'flex-1 text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] h-[auto] relative m-[0]',
                    style: {
                      color: '--tui-front-primary',
                      'font-family': 'Tahoma',
                      'white-space': 'normal',
                      'word-wrap': 'break-word',
                    },
                  },
                  'Title'
                ),
                render(
                  'p',
                  {
                    'data-figma-id': 'I4275:16682;4489:29261',
                    className:
                      'text-right text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                    style: {
                      color: '--tui-front-primary',
                      'font-family': 'Tahoma',
                    },
                  },
                  'Subtitle'
                )
              )
            )
        )
      )}
    </>
  )
}

export default PaymentPlanLatin
