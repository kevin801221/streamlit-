/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2024)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement } from "react"

import { Card } from "baseui/card"
import { useTheme } from "@emotion/react"

import { EmotionTheme } from "@streamlit/lib"

interface IDeployCardProps {
  children?: React.ReactNode
}

function DeployCard(
  props: React.PropsWithChildren<IDeployCardProps>
): ReactElement {
  const { colors, spacing, radii, breakpoints, sizes }: EmotionTheme =
    useTheme()
  const { children } = props
  return (
    <Card
      overrides={{
        Root: {
          style: {
            borderTopWidth: sizes.borderWidth,
            borderBottomWidth: sizes.borderWidth,
            borderLeftWidth: sizes.borderWidth,
            borderRightWidth: sizes.borderWidth,

            borderTopStyle: "solid",
            borderBottomStyle: "solid",
            borderLeftStyle: "solid",
            borderRightStyle: "solid",

            borderTopColor: colors.borderColor,
            borderBottomColor: colors.borderColor,
            borderLeftColor: colors.borderColor,
            borderRightColor: colors.borderColor,

            borderTopLeftRadius: radii.default,
            borderTopRightRadius: radii.default,
            borderBottomLeftRadius: radii.default,
            borderBottomRightRadius: radii.default,
          },
        },
        Contents: {
          style: {
            marginBottom: 0,
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
          },
        },
        Body: {
          style: {
            padding: spacing.threeXL,
            marginBottom: 0,
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,

            [`@media (max-width: ${breakpoints.md})`]: {
              padding: spacing.xl,
            },
          },
        },
      }}
    >
      {children}
    </Card>
  )
}

export default DeployCard
