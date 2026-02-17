import React from 'react'
import {
  useVariantState,
  resolveElementWithProps,
  useProps,
} from '@figmint/react'

interface ButtonLatinProps {
  Text?: string
  Text2?: string
  Text3?: string
  Style?: 'Dark' | 'Light' | 'Tertiary' | 'External'
  elementProps?: {
    [elementId: string]: Record<string, any> & {
      className?: string
      style?: React.CSSProperties
      as?: React.ElementType
    }
  }
}

const variantButtonLatinDark = (
  incomingProps: ButtonLatinProps & { eventHandlers?: Record<string, any> }
) => {
  const { props } = useProps(
    {
      Text: 'Get the app',
      Text2: 'Get the app',
      Text3: 'Get the app',
      Style: 'Dark',
    } as ButtonLatinProps,
    incomingProps
  )
  const render = (
    defaultTag: string,
    elementAttrs: Record<string, any>,
    ...children: any[]
  ) =>
    resolveElementWithProps(
      '4544:29722',
      props,
      defaultTag,
      elementAttrs,
      children
    )
  return render(
    'div',
    {
      'data-figma-id': '4544:29722',
      className:
        'inline-flex pt-[var(--Layout-Spacing-S,] pr-[16px)] pb-[var(--Layout-Spacing-M,] pl-[24px)] justify-center items-center rounded-[var(--Rounded-corners-CTA, 12px)] w-[100%] h-[100%] absolute top-[0px] left-[0px]',
      style: { background: '--tui-background-control-primary' },
    },
    render(
      'p',
      {
        'data-figma-id': '4544:29723',
        className:
          'text-center text-[var(--font-size-CTA, 14px)] not-italic font-bold leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
        style: {
          color: '--tui-invert-front-primary',
          'leading-trim': 'both',
          'text-edge': 'cap',
          'font-family': 'var(--font-Family-CTA, Tahoma)',
        },
      },
      props['Text']
    )
  )
}

const variantButtonLatinLight = (
  incomingProps: ButtonLatinProps & { eventHandlers?: Record<string, any> }
) => {
  const { props } = useProps(
    {
      Text: 'Get the app',
      Text2: 'Get the app',
      Text3: 'Get the app',
      Style: 'Dark',
    } as ButtonLatinProps,
    incomingProps
  )
  const render = (
    defaultTag: string,
    elementAttrs: Record<string, any>,
    ...children: any[]
  ) =>
    resolveElementWithProps(
      '4544:29724',
      props,
      defaultTag,
      elementAttrs,
      children
    )
  return render(
    'div',
    {
      'data-figma-id': '4544:29724',
      className:
        'inline-flex pt-[var(--Layout-Spacing-S,] pr-[16px)] pb-[var(--Layout-Spacing-M,] pl-[24px)] justify-center items-center rounded-[var(--Rounded-corners-CTA, 12px)] w-[100%] h-[100%] absolute top-[0px] left-[0px]',
      style: { background: '--tui-background-control-secondary' },
    },
    render(
      'p',
      {
        'data-figma-id': '4544:29725',
        className:
          'text-center text-[var(--font-size-CTA, 14px)] not-italic font-bold leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
        style: {
          color: '--tui-front-primary',
          'leading-trim': 'both',
          'text-edge': 'cap',
          'font-family': 'var(--font-Family-CTA, Tahoma)',
        },
      },
      props['Text']
    )
  )
}

const variantButtonLatinTertiary = (
  incomingProps: ButtonLatinProps & { eventHandlers?: Record<string, any> }
) => {
  const { props } = useProps(
    {
      Text: 'Get the app',
      Text2: 'Get the app',
      Text3: 'Get the app',
      Style: 'Dark',
    } as ButtonLatinProps,
    incomingProps
  )
  const render = (
    defaultTag: string,
    elementAttrs: Record<string, any>,
    ...children: any[]
  ) =>
    resolveElementWithProps(
      '4544:29726',
      props,
      defaultTag,
      elementAttrs,
      children
    )
  return render(
    'div',
    {
      'data-figma-id': '4544:29726',
      className:
        'inline-flex pt-[var(--Layout-Spacing-S,] pr-[16px)] pb-[var(--Layout-Spacing-M,] pl-[24px)] justify-center items-center rounded-[var(--Rounded-corners-CTA, 12px)] w-[100%] h-[100%] absolute top-[0px] left-[0px]',
      style: { border: '1.5px solid --tui-line-primary' },
    },
    render(
      'p',
      {
        'data-figma-id': '4544:29727',
        className:
          'text-center text-[var(--font-size-CTA, 14px)] not-italic font-bold leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
        style: {
          color: '--tui-front-accent',
          'leading-trim': 'both',
          'text-edge': 'cap',
          'font-family': 'var(--font-Family-CTA, Tahoma)',
        },
      },
      props['Text']
    )
  )
}

const variantButtonLatinExternal = (
  incomingProps: ButtonLatinProps & { eventHandlers?: Record<string, any> }
) => {
  const { props } = useProps(
    {
      Text: 'Get the app',
      Text2: 'Get the app',
      Text3: 'Get the app',
      Style: 'Dark',
    } as ButtonLatinProps,
    incomingProps
  )
  const render = (
    defaultTag: string,
    elementAttrs: Record<string, any>,
    ...children: any[]
  ) =>
    resolveElementWithProps(
      '4544:29728',
      props,
      defaultTag,
      elementAttrs,
      children
    )
  return render(
    'div',
    {
      'data-figma-id': '4544:29728',
      className:
        'inline-flex justify-center items-center gap-[8px] rounded-[var(--Rounded-corners-CTA, 12px)] w-[100%] h-[100%] absolute top-[0px] left-[0px]',
      style: { padding: 'var(--Layout-Spacing-S, 16px) 0' },
    },
    render(
      'p',
      {
        'data-figma-id': '4544:29729',
        className:
          'text-center text-[var(--font-size-CTA, 14px)] not-italic font-bold leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
        style: {
          color: '--tui-front-accent',
          'leading-trim': 'both',
          'text-edge': 'cap',
          'font-family': 'var(--font-Family-CTA, Tahoma)',
        },
      },
      props['Text']
    )
  )
}

const ButtonLatinPermutations = new Map<
  string,
  (props: ButtonLatinProps) => React.ReactElement
>([
  ['Dark', variantButtonLatinDark],
  ['Light', variantButtonLatinLight],
  ['Tertiary', variantButtonLatinTertiary],
  ['External', variantButtonLatinExternal],
])

const ButtonLatin = (incomingProps: ButtonLatinProps) => {
  const { props } = useProps(
    {
      Text: 'Get the app',
      Text2: 'Get the app',
      Text3: 'Get the app',
      Style: 'Dark',
    } as ButtonLatinProps,
    incomingProps
  )
  const ButtonLatinVariantConfig = [
    {
      params: { Style: 'Dark' },
      interactions: undefined,
      rootElementId: '4544:29722',
    },
    {
      params: { Style: 'Light' },
      interactions: undefined,
      rootElementId: '4544:29724',
    },
    {
      params: { Style: 'Tertiary' },
      interactions: undefined,
      rootElementId: '4544:29726',
    },
    {
      params: { Style: 'External' },
      interactions: undefined,
      rootElementId: '4544:29728',
    },
  ]

  const { content } = useVariantState({
    variants: ButtonLatinVariantConfig,
    props: props as Record<string, string | undefined>,
    permutations: ButtonLatinPermutations,
    dimensionOrder: ['Style'],
  })

  return <>{content}</>
}

export default ButtonLatin
