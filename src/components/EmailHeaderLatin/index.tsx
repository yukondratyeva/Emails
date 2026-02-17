import React from 'react'
import { resolveElementWithProps, useProps } from '@figmint/react'

import image2 from './assets/637ec9e0a3cbf42c4680d819a90009e8.png'
import image1 from './assets/7163dee12bd1324a3b0fd69cbdff9d2b.png'

interface EmailHeaderLatinProps {
  'Show Frame 2136136775'?: boolean
  'Show Button'?: boolean
  'Show Image'?: boolean
  'Show extra block'?: boolean
  elementProps?: {
    [elementId: string]: Record<string, any> & {
      className?: string
      style?: React.CSSProperties
      as?: React.ElementType
    }
  }
}

const EmailHeaderLatin = (incomingProps: EmailHeaderLatinProps) => {
  const { props } = useProps(
    {
      'Show Frame 2136136775': true,
      'Show Button': true,
      'Show Image': true,
      'Show extra block': true,
    } as EmailHeaderLatinProps,
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
          'data-figma-id': '4111:11877',
          className:
            'flex max-w-[480px] pb-[28px] flex-col justify-center items-start gap-[24px] rounded-[var(--Rounded-corners-Boxes-L, 20px)] w-[100%] h-[100%] absolute top-[0px] left-[0px]',
        },
        render(
          'div',
          {
            'data-figma-id': '4111:11856',
            className:
              'flex flex-col items-center self-stretch rounded-[0 0 var(--Rounded-corners-Boxes-L, 20px) var(--Rounded-corners-Boxes-L, 20px)] h-[auto] relative',
          },
          render(
            'div',
            {
              'data-figma-id': '4111:11857',
              className:
                'flex flex-col items-start self-stretch h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': '4111:11858',
                className:
                  'flex pt-[28px] pr-[0] pb-[8px] pl-[0] flex-col items-start gap-[10px] self-stretch h-[auto] relative',
              },
              render(
                'div',
                {
                  'data-figma-id': '4542:24600',
                  className:
                    'flex justify-between items-start w-[76px] h-[30px] relative',
                },
                render(
                  'div',
                  {
                    'data-figma-id': 'I4542:24600;4622:507197',
                    className: 'flex-1 w-[76px] h-[29.902px] relative',
                  },
                  React.createElement('img', {
                    src: image2,
                    className: 'w-[100%] h-[100%] object-cover',
                  })
                )
              )
            ),
            props['Show Image'] &&
              render(
                'div',
                {
                  'data-figma-id': '4111:11886',
                  className:
                    'flex pt-[8px] pr-[0] pb-[16px] pl-[0] flex-col items-start gap-[10px] self-stretch h-[auto] relative',
                },
                render('div', {
                  'data-figma-id': '4111:11884',
                  className:
                    'self-stretch rounded-[24px] w-[331px] h-[164px] relative',
                  style: {
                    background: {
                      type: 'template',
                      parts: [
                        'url(',
                        {
                          type: 'asset-reference',
                          value: '76d87819-02e6-48fd-b025-32a5c9be30d6.png',
                        },
                        ') 50% / ',
                        'cover',
                        ' no-repeat',
                        ', ',
                        'linear-gradient(to bottom, ',
                        'rgba(108, 255, 147, 1)',
                        ', ',
                        'rgba(108, 255, 147, 1)',
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
              'data-figma-id': '4281:30483',
              className:
                'flex pt-[8px] flex-col items-start gap-[8px] self-stretch h-[auto] relative',
            },
            render(
              'p',
              {
                'data-figma-id': '4281:30488',
                className:
                  'self-stretch text-[26px] not-italic font-bold leading-[130%] tracking-[0.26px] h-[auto] relative m-[0]',
                style: {
                  color: '--tui-front-primary',
                  'font-family': 'Tahoma',
                  'white-space': 'normal',
                  'word-wrap': 'break-word',
                },
              },
              'Your device is trusted'
            ),
            render(
              'p',
              {
                'data-figma-id': '4281:30490',
                className:
                  'self-stretch text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] h-[auto] relative m-[0]',
                style: {
                  color: '--tui-front-primary',
                  'font-family': 'Tahoma',
                  'white-space': 'normal',
                  'word-wrap': 'break-word',
                },
              },
              'Your device has been successfully marked as trusted. You can now use it to sign in and make transactions securely'
            )
          )
        ),
        props['Show extra block'] &&
          render(
            'div',
            {
              'data-figma-id': '4296:91403',
              className:
                'flex flex-col items-start gap-[10px] self-stretch h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': 'I4296:91403;4250:56150',
                className:
                  'flex min-h-[72px] py-[4px] px-[16px] flex-col justify-center items-start gap-[10px] self-stretch rounded-[24px] h-[72px] relative',
                style: { background: '--tui-background-general' },
              },
              render(
                'div',
                {
                  'data-figma-id': 'I4296:91403;4250:56150;4250:53060',
                  className:
                    'flex min-h-[40px] items-center gap-[16px] self-stretch h-[auto] relative',
                },
                props['Lead'] &&
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4296:91403;4250:56150;4250:53060;4250:52915',
                      className:
                        'flex justify-center items-center w-[40px] h-[auto] relative',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4296:91403;4250:56150;4250:53060;4250:52916',
                        className:
                          'flex justify-center items-center flex-shrink-0 w-[64px] h-[64px] relative',
                      },
                      render(
                        'div',
                        {
                          'data-figma-id':
                            'I4296:91403;4250:56150;4250:53060;4250:52916;37634:15751',
                          className:
                            'flex justify-center items-center flex-shrink-0 rounded-[128px] w-[40px] h-[40px] relative',
                          style: { background: 'webGeneralBg' },
                        },
                        props['Icon'] ||
                          render(
                            'div',
                            {
                              'data-figma-id':
                                'I4296:91403;4250:56150;4250:53060;4250:52916;37634:15752',
                              className: 'w-[24px] h-[24px] relative',
                            },
                            render(
                              'div',
                              {
                                'data-figma-id':
                                  'I4296:91403;4250:56150;4250:53060;4250:52916;37634:15752;1:85',
                                className:
                                  'absolute top-[2px] left-[2.4892578125px]',
                              },
                              <svg
                                width='20'
                                height='19'
                                viewBox='0 0 20 19'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  clip-rule='evenodd'
                                  d='M9.51056 0L11.7559 6.90956L19.0211 6.90983L13.1436 11.1804L15.3884 18.0902L9.51056 13.82L3.63271 18.0902L5.87753 11.1804L0 6.90983L7.26523 6.90956L9.51056 0Z'
                                  fill='#1A1919'
                                />
                              </svg>
                            )
                          )
                      )
                    )
                  ),
                render(
                  'div',
                  {
                    'data-figma-id':
                      'I4296:91403;4250:56150;4250:53060;4250:52944',
                    className:
                      'flex items-center gap-[16px] flex-1 h-[auto] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4296:91403;4250:56150;4250:53060;4250:52944;4250:49611',
                      className:
                        'flex flex-col justify-center items-start flex-1 h-[auto] relative',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4296:91403;4250:56150;4250:53060;4250:52944;4250:52676',
                        className:
                          'flex items-center self-stretch h-[auto] relative',
                      },
                      render(
                        'div',
                        {
                          'data-figma-id':
                            'I4296:91403;4250:56150;4250:53060;4250:52944;4250:56233',
                          className:
                            'flex items-center flex-1 h-[auto] relative',
                        },
                        render(
                          'p',
                          {
                            'data-figma-id':
                              'I4296:91403;4250:56150;4250:53060;4250:52944;4250:56233;4250:53639',
                            className:
                              'flex-1 text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] h-[auto] relative m-[0]',
                            style: {
                              color: '--tui-front-primary',
                              'font-family': 'Tahoma',
                              'white-space': 'normal',
                              'word-wrap': 'break-word',
                            },
                          },
                          props['Value']
                        )
                      )
                    ),
                    props['Subtitle'] &&
                      render(
                        'div',
                        {
                          'data-figma-id':
                            'I4296:91403;4250:56150;4250:53060;4250:52944;4250:52678',
                          className:
                            'flex items-center self-stretch h-[auto] relative',
                        },
                        render(
                          'div',
                          {
                            'data-figma-id':
                              'I4296:91403;4250:56150;4250:53060;4250:52944;4250:56268',
                            className:
                              'flex items-center flex-1 h-[auto] relative',
                          },
                          render(
                            'p',
                            {
                              'data-figma-id':
                                'I4296:91403;4250:56150;4250:53060;4250:52944;4250:56268;4250:53650',
                              className:
                                'flex-1 text-[14px] not-italic font-normal leading-[150%] tracking-[0.2px] h-[auto] relative m-[0]',
                              style: {
                                color: '--tui-front-secondary',
                                'font-family': 'Tahoma',
                                'white-space': 'normal',
                                'word-wrap': 'break-word',
                              },
                            },
                            props['Value']
                          )
                        )
                      )
                  )
                )
              )
            )
          ),
        props['Show Button'] &&
          render(
            'div',
            {
              'data-figma-id': '4395:62821',
              className:
                'flex pt-[var(--Layout-Spacing-S,] pr-[16px)] pb-[var(--Layout-Spacing-M,] pl-[24px)] justify-center items-center rounded-[var(--Rounded-corners-CTA, 12px)] w-[auto] h-[42px] relative',
              style: { background: '--tui-background-control-primary' },
            },
            render(
              'p',
              {
                'data-figma-id': 'I4395:62821;4266:16908',
                className:
                  'text-center text-[var(--font-size-CTA, 14px)] not-italic font-bold leading-[100%] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                style: {
                  color: '--tui-invert-front-primary',
                  'leading-trim': 'both',
                  'text-edge': 'cap',
                  'font-family': 'Tahoma',
                },
              },
              'Get the app'
            )
          )
      )}
    </>
  )
}

export default EmailHeaderLatin
