import React from 'react'
import {
  useVariantState,
  resolveElementWithProps,
  useProps,
} from '@figmint/react'

interface EmailDividerProps {
  'Next block have own top padding'?: 'False' | 'True'
  elementProps?: {
    [elementId: string]: Record<string, any> & {
      className?: string
      style?: React.CSSProperties
      as?: React.ElementType
    }
  }
}

const variantEmailDividerFalse = (
  incomingProps: EmailDividerProps & { eventHandlers?: Record<string, any> }
) => {
  const { props } = useProps(
    { 'Next block have own top padding': 'False' } as EmailDividerProps,
    incomingProps
  )
  const render = (
    defaultTag: string,
    elementAttrs: Record<string, any>,
    ...children: any[]
  ) =>
    resolveElementWithProps(
      '4172:13907',
      props,
      defaultTag,
      elementAttrs,
      children
    )
  return render(
    'div',
    {
      'data-figma-id': '4172:13907',
      className:
        'flex pb-[32px] flex-col items-start gap-[10px] w-[100%] h-[100%] absolute top-[0px] left-[0px]',
    },
    render(
      'div',
      {
        'data-figma-id': '4172:13899',
        className: 'flex items-start self-stretch h-[auto] relative',
      },
      render('div', {
        'data-figma-id': 'I4172:13899;3344:5731',
        className: 'flex-1 w-[343px] h-[1px] relative',
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
  )
}

const variantEmailDividerTrue = (
  incomingProps: EmailDividerProps & { eventHandlers?: Record<string, any> }
) => {
  const { props } = useProps(
    { 'Next block have own top padding': 'False' } as EmailDividerProps,
    incomingProps
  )
  const render = (
    defaultTag: string,
    elementAttrs: Record<string, any>,
    ...children: any[]
  ) =>
    resolveElementWithProps(
      '4275:19960',
      props,
      defaultTag,
      elementAttrs,
      children
    )
  return render(
    'div',
    {
      'data-figma-id': '4275:19960',
      className:
        'flex pb-[20px] flex-col items-start gap-[10px] w-[100%] h-[100%] absolute top-[0px] left-[0px]',
    },
    render(
      'div',
      {
        'data-figma-id': '4275:19961',
        className: 'flex items-start self-stretch h-[auto] relative',
      },
      render('div', {
        'data-figma-id': 'I4275:19961;3344:5731',
        className: 'flex-1 w-[343px] h-[1px] relative',
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
  )
}

const EmailDividerPermutations = new Map<
  string,
  (props: EmailDividerProps) => React.ReactElement
>([
  ['False', variantEmailDividerFalse],
  ['True', variantEmailDividerTrue],
])

const EmailDivider = (incomingProps: EmailDividerProps) => {
  const { props } = useProps(
    { 'Next block have own top padding': 'False' } as EmailDividerProps,
    incomingProps
  )
  const EmailDividerVariantConfig = [
    {
      params: { 'Next block have own top padding': 'False' },
      interactions: undefined,
      rootElementId: '4172:13907',
    },
    {
      params: { 'Next block have own top padding': 'True' },
      interactions: undefined,
      rootElementId: '4275:19960',
    },
  ]

  const { content } = useVariantState({
    variants: EmailDividerVariantConfig,
    props: props as Record<string, string | undefined>,
    permutations: EmailDividerPermutations,
    dimensionOrder: ['Next block have own top padding'],
  })

  return <>{content}</>
}

export default EmailDivider
