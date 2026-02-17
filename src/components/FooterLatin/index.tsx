import React from 'react'
import { resolveElementWithProps, useProps } from '@figmint/react'

import image1 from './assets/637ec9e0a3cbf42c4680d819a90009e8.png'

interface FooterLatinProps {
  'Show Help'?: boolean
  'Show App'?: boolean
  elementProps?: {
    [elementId: string]: Record<string, any> & {
      className?: string
      style?: React.CSSProperties
      as?: React.ElementType
    }
  }
}

const FooterLatin = (incomingProps: FooterLatinProps) => {
  const { props } = useProps(
    { 'Show Help': true, 'Show App': false } as FooterLatinProps,
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
          'data-figma-id': '4282:34845',
          className:
            'flex max-w-[480px] flex-col items-start gap-[24px] w-[100%] h-[100%] absolute top-[0px] left-[0px]',
        },
        props['Show Help'] &&
          render(
            'div',
            {
              'data-figma-id': '4282:34847',
              className:
                'flex flex-col items-start self-stretch h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': 'I4282:34847;4159:11154',
                className:
                  'flex py-[30px] px-[24px] items-start gap-[25px] self-stretch rounded-[var(--Rounded-corners-Boxes-L, 20px)] h-[auto] relative',
                style: { background: '--tui-background-general' },
              },
              render(
                'div',
                {
                  'data-figma-id': 'I4282:34847;4159:11172',
                  className:
                    'flex flex-col justify-center items-start gap-[24px] flex-1 h-[auto] relative',
                },
                render(
                  'div',
                  {
                    'data-figma-id': 'I4282:34847;4159:11173',
                    className:
                      'flex flex-col items-start gap-[8px] self-stretch h-[auto] relative',
                  },
                  render(
                    'p',
                    {
                      'data-figma-id': 'I4282:34847;4159:11174',
                      className:
                        'self-stretch text-[18px] not-italic font-bold leading-[120%] tracking-[0.2px] h-[auto] relative m-[0]',
                      style: {
                        color:
                          'var(--Core-Neutral-1000, var(--New-brand-Neutral-1000, #000))',
                        'font-family': 'Tahoma',
                        'white-space': 'normal',
                        'word-wrap': 'break-word',
                      },
                    },
                    'Got questions? '
                  ),
                  render(
                    'p',
                    {
                      'data-figma-id': 'I4282:34847;4159:11175',
                      className:
                        'self-stretch text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] h-[auto] relative m-[0]',
                      style: {
                        color: '--tui-front-accent',
                        'font-family': 'Tahoma',
                        'white-space': 'normal',
                        'word-wrap': 'break-word',
                      },
                    },
                    'Get support and answers to frequently asked questions at helpcenter.tabby.ai'
                  )
                )
              ),
              render(
                'div',
                {
                  'data-figma-id': 'I4282:34847;4159:11155',
                  className: 'w-[75px] h-[75px] relative',
                },
                React.createElement(
                  React.Fragment,
                  null,
                  render(
                    'div',
                    {
                      'data-figma-id': 'I4282:34847;4159:11157',
                      className: 'absolute',
                      style: {
                        top: 'calc(54.7860107421875px + (100% - 75px) / 2)',
                        left: 'calc(13.691650390625px + (100% - 75px) / 2)',
                      },
                    },
                    <svg
                      width='48'
                      height='13'
                      viewBox='0 0 48 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M23.5587 12.1594C36.5699 12.1594 47.1175 9.43739 47.1175 6.07968C47.1175 2.72196 36.5699 0 23.5587 0C10.5476 0 0 2.72196 0 6.07968C0 9.43739 10.5476 12.1594 23.5587 12.1594Z'
                        fill='black'
                      />
                    </svg>
                  ),
                  React.createElement(
                    React.Fragment,
                    null,
                    render(
                      'div',
                      {
                        'data-figma-id': 'I4282:34847;4159:11159',
                        className:
                          'absolute top-[7.3218994140625px] bottom-[11.23746109008789px] left-[9.25px] right-[25.513286590576172px]',
                      },
                      <svg
                        width='42'
                        height='58'
                        viewBox='0 0 42 58'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M31.5675 1.18087L40.8358 3.46254L25.4875 9.30754C24.1842 9.44087 14.0325 23.6409 14.0325 23.6409C12.9592 26.3075 16.0092 45.7459 19.3175 46.3542L30.6725 55.4159C27.7408 56.6675 26.0856 57.0399 26.0856 57.0399L15.8878 54.4551C9.5745 52.7768 4.2975 47.8609 1.90416 40.2725C-2.32251 26.8575 4.05583 10.4275 16.1508 3.58087C21.3492 0.639206 26.7558 -0.0507942 31.5675 1.18087Z'
                          fill='#3A7DCF'
                          stroke='black'
                          stroke-width='1.19848'
                          stroke-linejoin='round'
                        />
                      </svg>
                    ),
                    render(
                      'div',
                      {
                        'data-figma-id': 'I4282:34847;4159:11160',
                        className:
                          'absolute top-[54.8360595703125px] bottom-[11.284393310546875px] left-[14.7763671875px] right-[37.75235939025879px]',
                      },
                      <svg
                        width='24'
                        height='11'
                        viewBox='0 0 24 11'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M20.5596 9.47879L10.3618 6.89405C6.61348 5.8976 3.23046 3.7599 0.599365 0.599243L23.0706 6.31004L20.5596 9.47879Z'
                          fill='black'
                          stroke='black'
                          stroke-width='1.19848'
                          stroke-linejoin='round'
                        />
                      </svg>
                    ),
                    render(
                      'div',
                      {
                        'data-figma-id': 'I4282:34847;4159:11161',
                        className:
                          'absolute top-[7.27392578125px] bottom-[56.73789978027344px] left-[18.632568359375px] right-[25.513324737548828px]',
                      },
                      <svg
                        width='33'
                        height='13'
                        viewBox='0 0 33 13'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M31.4535 3.46254L31.4503 3.46175C31.2393 3.51897 20.7298 6.37894 16.1051 9.30587C15.4517 9.7198 14.5733 10.4454 13.5995 11.5874L0.599365 8.36034C2.43321 6.48551 4.50032 4.86466 6.76847 3.58087C11.9668 0.639206 17.3735 -0.0507941 22.1851 1.18087L31.4503 3.46175C31.4524 3.46116 31.4535 3.46087 31.4535 3.46087V3.46254Z'
                          fill='#DFECF7'
                          stroke='black'
                          stroke-width='1.19848'
                          stroke-linejoin='round'
                        />
                      </svg>
                    ),
                    render(
                      'div',
                      {
                        'data-figma-id': 'I4282:34847;4159:11162',
                        className:
                          'absolute top-[9.7947998046875px] bottom-[10.635139465332031px] left-[19.339599609375px] right-[9.24997329711914px]',
                      },
                      <svg
                        width='48'
                        height='56'
                        viewBox='0 0 48 56'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M45.7027 15.4931C41.476 2.06972 28.2477 -3.26194 16.151 3.58306C4.05434 10.4297 -2.32233 26.8597 1.90433 40.2747C6.13433 53.6964 19.361 59.0314 31.4577 52.1864C43.5543 45.3397 49.931 28.9097 45.7043 15.4947L45.7027 15.4931Z'
                          fill='#8DC5F7'
                          stroke='black'
                          stroke-width='1.19848'
                          stroke-linejoin='round'
                        />
                      </svg>
                    ),
                    React.createElement(
                      React.Fragment,
                      null,
                      render(
                        'div',
                        {
                          'data-figma-id': 'I4282:34847;4159:11164',
                          className:
                            'absolute top-[25.013671875px] bottom-[31.600631713867188px] left-[35.113037109375px] right-[25.914636611938477px]',
                        },
                        <svg
                          width='16'
                          height='20'
                          viewBox='0 0 16 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M8.86327 18.9849L5.49733 18.1324V16.5835C5.49733 16.0244 5.54909 15.506 5.65335 15.0288C5.75761 14.5517 5.90845 14.1057 6.10735 13.6909C6.30552 13.2769 6.54509 12.8686 6.8268 12.4654C7.10852 12.063 7.42573 11.646 7.78065 11.2146L8.93784 9.80054C9.39628 9.27989 9.77707 8.73894 10.0795 8.18058C10.3812 7.62222 10.5328 6.96669 10.5328 6.214C10.5328 5.18139 10.2148 4.43667 9.57891 3.97984C8.94228 3.523 10.2201 3.82211 9.21892 4.06793C8.21775 4.31375 6.15257 4.70689 5.52628 5.54878C4.90073 6.39139 3.99273 8.31809 3.88847 9.33329L0.599365 8.49999C0.724327 7.54426 0.907776 6.62733 1.30484 5.78761C1.70043 4.9479 2.19658 4.19738 2.79107 3.5346C3.38556 2.87254 4.06804 2.31201 4.83999 1.85299C5.6112 1.3947 6.43565 1.05751 7.31112 0.842146C8.18659 0.626779 9.00513 0.55499 9.76672 0.625329C10.5276 0.696393 13.1903 1.31685 14.1227 1.66419C14.7682 1.90494 13.733 2.38499 14.0665 3.04559C14.4 3.70547 14.5671 4.5198 14.5671 5.48786C14.5671 6.17675 14.6056 9.06064 14.4599 9.61319C14.3135 10.165 9.34314 15.98 9.34314 16.5173L8.86327 18.9849Z'
                            fill='#3A7DCF'
                            stroke='black'
                            stroke-width='1.19849'
                            stroke-linejoin='round'
                          />
                        </svg>
                      ),
                      render(
                        'div',
                        {
                          'data-figma-id': 'I4282:34847;4159:11165',
                          className:
                            'absolute top-[25.013671875px] bottom-[41.25227928161621px] left-[35.113037109375px] right-[25.919172286987305px]',
                        },
                        <svg
                          width='16'
                          height='10'
                          viewBox='0 0 16 10'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M10.5328 6.214C10.5328 5.18139 10.2148 4.43667 9.57891 3.97984C9.56482 3.96972 9.55166 3.95998 9.5394 3.9506C9.47846 3.98891 9.37716 4.02909 9.21896 4.06793C8.21779 4.31376 6.1526 4.70689 5.52632 5.54878C4.90077 6.39139 3.99277 8.31809 3.88851 9.33329L0.599365 8.49999C0.724327 7.54426 0.907776 6.62733 1.30484 5.78761C1.70043 4.9479 2.19658 4.19738 2.79107 3.5346C3.38556 2.87254 4.06804 2.31201 4.83999 1.85299C5.6112 1.3947 6.43565 1.05751 7.31112 0.842146C8.18659 0.626779 9.00512 0.55499 9.76672 0.625329C10.5276 0.696393 13.1904 1.31685 14.1228 1.66419C14.7683 1.90494 13.7331 2.38499 14.0666 3.04559C14.4001 3.70547 14.5672 4.5198 14.5672 5.48786L10.5328 6.214Z'
                            fill='#DFECF7'
                            stroke='black'
                            stroke-width='1.19849'
                            stroke-linejoin='round'
                          />
                        </svg>
                      ),
                      render(
                        'div',
                        {
                          'data-figma-id': 'I4282:34847;4159:11166',
                          className:
                            'absolute top-[27.4599609375px] bottom-[40.97242975234985px] left-[44.092041015625px] right-[25.91512441635132px]',
                        },
                        <svg
                          width='7'
                          height='8'
                          viewBox='0 0 7 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M1.55321 3.76763C1.55321 4.52033 1.40163 5.17585 1.09995 5.73421L5.4804 7.16685C5.62606 6.61429 5.58761 3.7304 5.58761 3.04152C5.58761 2.07346 5.42051 1.25912 5.08703 0.599243L0.599365 1.53347C1.23526 1.99031 1.55321 2.73503 1.55321 3.76763Z'
                            fill='black'
                            stroke='black'
                            stroke-width='1.19849'
                            stroke-linejoin='round'
                          />
                        </svg>
                      ),
                      render(
                        'div',
                        {
                          'data-figma-id': 'I4282:34847;4159:11167',
                          className:
                            'absolute top-[25.8646240234375px] bottom-[31.602191925048828px] left-[38.401611328125px] right-[23.45970058441162px]',
                        },
                        <svg
                          width='15'
                          height='19'
                          viewBox='0 0 15 19'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M8.51482 17.4095L5.57416 18.1324V16.5835C5.57416 16.0244 5.62592 15.506 5.73018 15.0288C5.83443 14.5517 5.98528 14.1057 6.18418 13.6909C6.38234 13.2769 6.62191 12.8686 6.90363 12.4654C7.18535 12.063 7.50256 11.646 7.85748 11.2146L9.01466 9.80055C9.4731 9.2799 9.8539 8.73894 10.1563 8.18058C10.458 7.62222 10.6096 6.96669 10.6096 6.214C10.6096 5.1814 10.2916 4.43668 9.65574 3.97984C9.0191 3.523 8.20131 3.41785 7.20014 3.66368C6.19897 3.9095 5.3235 4.46931 4.69721 5.31119C4.07167 6.15381 3.7064 7.08272 3.60214 8.09719L0.599365 8.48079C0.724327 7.52505 0.984602 6.62733 1.38167 5.78761C1.77726 4.9479 2.2734 4.19738 2.86789 3.5346C3.46238 2.87254 4.14487 2.31201 4.91682 1.85299C5.68803 1.3947 6.51248 1.05751 7.38795 0.842146C8.26341 0.626779 9.08195 0.55499 9.84355 0.625329C10.6044 0.696393 11.2773 0.913212 11.8614 1.27506C12.4448 1.6369 12.904 2.14813 13.2375 2.80801C13.5709 3.46789 13.7381 4.28222 13.7381 5.25029C13.7381 5.93917 13.6649 6.55916 13.5192 7.111C13.3728 7.66283 13.1694 8.1813 12.9092 8.66425C12.6482 9.14792 12.3302 9.61854 11.9553 10.0768C11.5797 10.5351 11.173 11.0115 10.7353 11.5061C10.3175 11.9745 9.96333 12.3893 9.67126 12.7519C9.37919 13.1144 9.14997 13.4661 8.98287 13.8084C8.81576 14.1514 8.69597 14.514 8.62277 14.8968C8.54957 15.2812 8.51334 15.7416 8.51334 16.279V17.4087L8.51482 17.4095Z'
                            fill='#66ABFE'
                            stroke='black'
                            stroke-width='1.19849'
                            stroke-linejoin='round'
                          />
                        </svg>
                      ),
                      React.createElement(
                        React.Fragment,
                        null,
                        render(
                          'div',
                          {
                            'data-figma-id': 'I4282:34847;4159:11169',
                            className:
                              'absolute top-[44.52685546875px] bottom-[24.880632877349854px] left-[39.4713830947876px] right-[29.63525390625px]',
                          },
                          <svg
                            width='8'
                            height='7'
                            viewBox='0 0 8 7'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M0.770898 4.0758C0.981632 4.63778 1.34543 5.03153 1.86154 5.25777C1.95618 5.29911 2.05083 5.33174 2.14621 5.35422L5.45527 6.19188L6.49268 1.48643L3.21763 0.656028C2.77398 0.534204 2.31924 0.608895 1.8534 0.879373C1.31289 1.19408 0.942443 1.65963 0.742801 2.276C0.542419 2.89237 0.552032 3.49206 0.770898 4.0758Z'
                              fill='#DFECF7'
                              stroke='black'
                              stroke-width='1.19849'
                              stroke-linejoin='round'
                            />
                          </svg>
                        ),
                        render(
                          'div',
                          {
                            'data-figma-id': 'I4282:34847;4159:11170',
                            className:
                              'absolute top-[47.02783203125px] bottom-[24.87922716140747px] left-[39.47164297103882px] right-[30.27880859375px]',
                          },
                          <svg
                            width='7'
                            height='5'
                            viewBox='0 0 7 5'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M1.86155 2.75808C1.34544 2.53183 0.981647 2.13809 0.770914 1.5761C0.650647 1.25534 0.593564 0.92976 0.599787 0.599243L5.84888 1.91145L5.45528 3.69218L2.14623 2.85453C2.05084 2.83205 1.9562 2.79941 1.86155 2.75808Z'
                              fill='black'
                              stroke='black'
                              stroke-width='1.19849'
                              stroke-linejoin='round'
                            />
                          </svg>
                        ),
                        render(
                          'div',
                          {
                            'data-figma-id': 'I4282:34847;4159:11171',
                            className:
                              'absolute top-[45.379150390625px] bottom-[24.821143627166748px] left-[42.83727216720581px] right-[28.070556640625px]',
                          },
                          <svg
                            width='6'
                            height='6'
                            viewBox='0 0 6 6'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M0.770531 4.0751C0.981265 4.63709 1.3458 5.03084 1.86191 5.25709C2.37876 5.48333 2.90744 5.43909 3.44796 5.12511C3.98847 4.81112 4.33378 4.35356 4.53934 3.72051C4.74489 3.08746 4.74194 2.49067 4.5312 1.92869C4.31233 1.34567 3.94632 0.946117 3.43391 0.73075C2.92149 0.515383 2.39503 0.564691 1.85378 0.879403C1.31326 1.19339 0.942815 1.65966 0.742433 2.27603C0.542791 2.8924 0.551664 3.49281 0.770531 4.07583V4.0751Z'
                              fill='#66ABFE'
                              stroke='black'
                              stroke-width='1.19849'
                              stroke-linejoin='round'
                            />
                          </svg>
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
        render(
          'div',
          {
            'data-figma-id': '4282:34849',
            className:
              'flex flex-col items-start gap-[10px] self-stretch h-[auto] relative',
          },
          render(
            'div',
            {
              'data-figma-id': 'I4282:34849;4544:36572',
              className:
                'flex flex-col items-center gap-[var(--Layout-Spacing-S, 16px)] self-stretch rounded-[var(--Rounded-corners-Boxes-L, 20px)] h-[auto] relative',
              style: { padding: '8px 0 var(--Layout-Spacing-L, 32px) 0' },
            },
            render(
              'div',
              {
                'data-figma-id': 'I4282:34849;4544:36573',
                className:
                  'flex flex-col items-center gap-[16px] self-stretch h-[auto] relative',
              },
              render(
                'div',
                {
                  'data-figma-id': 'I4282:34849;4544:36587',
                  className:
                    'flex flex-col items-center gap-[16px] self-stretch h-[auto] relative',
                },
                render(
                  'p',
                  {
                    'data-figma-id': 'I4282:34849;4544:36588',
                    className:
                      'text-center text-[var(--font-size-P3, 10px)] not-italic font-normal leading-[130%] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                    style: {
                      color:
                        'var(--Core-Neutral-500, var(--New-brand-Neutral-500, #75726F))',
                      'leading-trim': 'both',
                      'text-edge': 'cap',
                      'font-family': 'Tahoma',
                    },
                  },
                  'Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai'
                ),
                render(
                  'div',
                  {
                    'data-figma-id': 'I4282:34849;4544:36589',
                    className: 'w-[210px] h-[7px] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id': 'I4282:34849;4544:36590',
                      className:
                        'inline-flex justify-center items-start gap-[6px] w-[210px] h-[7px] absolute top-[0px] left-[0px]',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id': 'I4282:34849;4544:36591',
                        className: 'w-[20px] h-[7px] relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id': 'I4282:34849;4544:36592',
                          className:
                            'text-center text-[var(--font-size-P3, 10px)] not-italic font-normal leading-[130%] w-[auto] h-[auto] absolute top-[0px] left-[0px] whitespace-nowrap m-[0]',
                          style: {
                            color:
                              'var(--Core-Neutral-500, var(--New-brand-Neutral-500, #75726F))',
                            'leading-trim': 'both',
                            'text-edge': 'cap',
                            'font-family': 'Tahoma',
                            'text-decoration-line': 'underline',
                            'text-decoration-style': 'solid',
                            'text-decoration-skip-ink': 'none',
                            'text-decoration-thickness': 'auto',
                            'text-underline-offset': 'auto',
                            'text-underline-position': 'from-font',
                          },
                        },
                        'Help'
                      )
                    ),
                    render(
                      'div',
                      {
                        'data-figma-id': 'I4282:34849;4544:36593',
                        className: 'w-[5px] h-[7px] relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id': 'I4282:34849;4544:36594',
                          className:
                            'text-center text-[var(--font-size-P3, 10px)] not-italic font-normal leading-[130%] w-[auto] h-[auto] absolute top-[0px] left-[0px] whitespace-nowrap m-[0]',
                          style: {
                            color:
                              'var(--Core-Neutral-500, var(--New-brand-Neutral-500, #75726F))',
                            'leading-trim': 'both',
                            'text-edge': 'cap',
                            'font-family': 'var(--font-Family-Body, Tahoma)',
                          },
                        },
                        '•'
                      )
                    ),
                    render(
                      'div',
                      {
                        'data-figma-id': 'I4282:34849;4544:36595',
                        className: 'w-[80px] h-[7px] relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id': 'I4282:34849;4544:36596',
                          className:
                            'text-center text-[var(--font-size-P3, 10px)] not-italic font-normal leading-[130%] w-[auto] h-[auto] absolute top-[0px] left-[0px] whitespace-nowrap m-[0]',
                          style: {
                            color:
                              'var(--Core-Neutral-500, var(--New-brand-Neutral-500, #75726F))',
                            'leading-trim': 'both',
                            'text-edge': 'cap',
                            'font-family': 'Tahoma',
                            'text-decoration-line': 'underline',
                            'text-decoration-style': 'solid',
                            'text-decoration-skip-ink': 'none',
                            'text-decoration-thickness': 'auto',
                            'text-underline-offset': 'auto',
                            'text-underline-position': 'from-font',
                          },
                        },
                        'Shariah-compliant'
                      )
                    ),
                    render(
                      'div',
                      {
                        'data-figma-id': 'I4282:34849;4544:36597',
                        className: 'w-[5px] h-[7px] relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id': 'I4282:34849;4544:36598',
                          className:
                            'text-center text-[var(--font-size-P3, 10px)] not-italic font-normal leading-[130%] w-[auto] h-[auto] absolute top-[0px] left-[0px] whitespace-nowrap m-[0]',
                          style: {
                            color:
                              'var(--Core-Neutral-500, var(--New-brand-Neutral-500, #75726F))',
                            'leading-trim': 'both',
                            'text-edge': 'cap',
                            'font-family': 'var(--font-Family-Body, Tahoma)',
                          },
                        },
                        '•'
                      )
                    ),
                    render(
                      'div',
                      {
                        'data-figma-id': 'I4282:34849;4544:36599',
                        className: 'w-[32px] h-[7px] relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id': 'I4282:34849;4544:36600',
                          className:
                            'text-center text-[var(--font-size-P3, 10px)] not-italic font-normal leading-[130%] w-[auto] h-[auto] absolute top-[0px] left-[0px] whitespace-nowrap m-[0]',
                          style: {
                            color:
                              'var(--Core-Neutral-500, var(--New-brand-Neutral-500, #75726F))',
                            'leading-trim': 'both',
                            'text-edge': 'cap',
                            'font-family': 'Tahoma',
                            'text-decoration-line': 'underline',
                            'text-decoration-style': 'solid',
                            'text-decoration-skip-ink': 'none',
                            'text-decoration-thickness': 'auto',
                            'text-underline-offset': 'auto',
                            'text-underline-position': 'from-font',
                          },
                        },
                        'Privacy'
                      )
                    ),
                    render(
                      'div',
                      {
                        'data-figma-id': 'I4282:34849;4544:36601',
                        className: 'w-[5px] h-[7px] relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id': 'I4282:34849;4544:36602',
                          className:
                            'text-center text-[var(--font-size-P3, 10px)] not-italic font-normal leading-[130%] w-[auto] h-[auto] absolute top-[0px] left-[0px] whitespace-nowrap m-[0]',
                          style: {
                            color:
                              'var(--Core-Neutral-500, var(--New-brand-Neutral-500, #75726F))',
                            'leading-trim': 'both',
                            'text-edge': 'cap',
                            'font-family': 'var(--font-Family-Body, Tahoma)',
                          },
                        },
                        '•'
                      )
                    ),
                    render(
                      'div',
                      {
                        'data-figma-id': 'I4282:34849;4544:36603',
                        className: 'w-[27px] h-[7px] relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id': 'I4282:34849;4544:36604',
                          className:
                            'text-center text-[var(--font-size-P3, 10px)] not-italic font-normal leading-[130%] w-[auto] h-[auto] absolute top-[0px] left-[0px] whitespace-nowrap m-[0]',
                          style: {
                            color:
                              'var(--Core-Neutral-500, var(--New-brand-Neutral-500, #75726F))',
                            'leading-trim': 'both',
                            'text-edge': 'cap',
                            'font-family': 'Tahoma',
                            'text-decoration-line': 'underline',
                            'text-decoration-style': 'solid',
                            'text-decoration-skip-ink': 'none',
                            'text-decoration-thickness': 'auto',
                            'text-underline-offset': 'auto',
                            'text-underline-position': 'from-font',
                          },
                        },
                        'Terms'
                      )
                    )
                  )
                )
              )
            ),
            render(
              'div',
              {
                'data-figma-id': 'I4282:34849;4544:36605',
                className:
                  'flex justify-between items-start w-[61px] h-[24px] relative',
              },
              render(
                'div',
                {
                  'data-figma-id': 'I4282:34849;4544:36605;4622:500514',
                  className: 'flex-1 w-[61px] h-[24px] relative',
                },
                React.createElement('img', {
                  src: image1,
                  className: 'w-[100%] h-[100%] object-cover',
                })
              )
            )
          )
        )
      )}
    </>
  )
}

export default FooterLatin
