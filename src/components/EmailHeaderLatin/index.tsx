import React from 'react'
import { resolveElementWithProps, useProps } from '@figmint/react'

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
                    'data-figma-id': 'I4542:24600;4561:157876',
                    className: 'w-[76px] h-[30px] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id': 'I4542:24600;4561:157877',
                      className:
                        'absolute top-[0px] bottom-[0px] left-[0px] right-[0px]',
                    },
                    <svg
                      width='76'
                      height='30'
                      viewBox='0 0 76 30'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0 15C0 9.3655 0 6.54825 1.21624 4.45424C1.99406 3.11506 3.10437 2.00093 4.43895 1.22043C6.52578 0 9.33337 0 14.9485 0H61.0515C66.6666 0 69.4742 0 71.561 1.22043C72.8956 2.00093 74.0059 3.11506 74.7838 4.45424C76 6.54825 76 9.3655 76 15C76 20.6345 76 23.4517 74.7838 25.5458C74.0059 26.8849 72.8956 27.9991 71.561 28.7796C69.4742 30 66.6666 30 61.0515 30H14.9485C9.33336 30 6.52578 30 4.43895 28.7796C3.10437 27.9991 1.99406 26.8849 1.21624 25.5458C0 23.4517 0 20.6345 0 15Z'
                        fill='#6CFF93'
                      />
                    </svg>
                  ),
                  render(
                    'div',
                    {
                      'data-figma-id': 'I4542:24600;4561:158126',
                      className:
                        'absolute top-[7.1016845703125px] bottom-[5.8055419921875px] left-[6.263671875px] right-[7.0986328125px]',
                    },
                    <svg
                      width='63'
                      height='18'
                      viewBox='0 0 63 18'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M55.6768 2.82617V7.42871C55.6768 8.49862 56.099 9.08398 57.0244 9.08398C58.156 9.08398 58.7138 8.3778 58.7139 6.7832V2.82617H62.6377V10.5381C62.6375 14.7769 59.912 17.0926 56.3408 17.0928C53.8572 17.0928 52.4737 16.3467 51.5928 15.502V11.7549C52.3774 12.8854 53.6573 13.6631 55.5938 13.6631C57.3456 13.663 59.0205 12.7744 59.0205 10.5742V10.1709C58.4371 11.7249 57.1457 12.3339 55.6367 12.334C53.5652 12.334 51.7334 10.8001 51.7334 8.11523V2.82617H55.6768Z'
                        fill='#1A1919'
                      />
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M16.6885 2.52344C18.4185 2.52344 19.5855 3.29049 20.2695 4.72363V2.82617H24.2129V14.5352H20.2695V12.334C19.6056 13.9288 18.4186 14.8379 16.6885 14.8379C14.1537 14.8379 12.3428 12.5565 12.3428 8.37793C12.3428 4.603 14.1537 2.52346 16.6885 2.52344ZM18.3379 5.49121C17.131 5.49136 16.4268 6.46008 16.4268 8.17578C16.4268 9.89154 17.131 10.8602 18.3379 10.8604C19.5852 10.8604 20.249 9.89167 20.249 8.17578C20.249 6.45995 19.5852 5.49121 18.3379 5.49121Z'
                        fill='#1A1919'
                      />
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M29.584 0V4.72363C30.268 3.29052 31.435 2.52344 33.165 2.52344C35.6998 2.52353 37.5303 4.60306 37.5303 8.37793C37.5302 12.5564 35.6997 14.8378 33.165 14.8379C31.4349 14.8379 30.2479 13.9288 29.584 12.334V14.5352H25.6406V0H29.584ZM31.4951 5.49121C30.268 5.49121 29.584 6.48013 29.584 8.17578C29.584 9.75036 30.2679 10.6592 31.4951 10.6592C32.7223 10.6592 33.4062 9.77055 33.4062 8.17578C33.4062 6.41958 32.7223 5.49121 31.4951 5.49121Z'
                        fill='#1A1919'
                      />
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M42.6406 0V4.72363C43.3246 3.29059 44.4917 2.52344 46.2217 2.52344C48.7563 2.52368 50.5664 4.58301 50.5664 8.37793C50.5663 12.5764 48.7562 14.8376 46.2217 14.8379C44.4916 14.8379 43.3045 13.9288 42.6406 12.334V14.5352H38.6973V0H42.6406ZM44.5713 5.49121C43.3443 5.49136 42.6406 6.41972 42.6406 8.17578C42.6406 9.9319 43.3443 10.8602 44.5713 10.8604C45.7784 10.8604 46.4824 9.89167 46.4824 8.17578C46.4824 6.45995 45.7783 5.49121 44.5713 5.49121Z'
                        fill='#1A1919'
                      />
                      <path
                        d='M7.07422 0V2.82617H11.1523V5.7334H7.07422V6.94434H11.1523V9.85156H7.07422C7.09438 10.8607 7.6379 11.3046 8.74414 11.3047C9.43504 11.3047 10.1663 11.104 11.1523 10.6426V13.9531C10.3404 14.3904 9.19927 14.7797 7.81152 14.7773C5.26835 14.7728 3.13203 13.4558 3.13184 10.1143V9.85156H0.402344L0.22168 6.94434H3.13184V5.7334H0.181641L0 2.82617H3.13184V0H7.07422Z'
                        fill='#1A1919'
                      />
                    </svg>
                  )
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
                          value: '12f6d2b5-6a86-43d8-8d11-2ec69b5d5349.png',
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
