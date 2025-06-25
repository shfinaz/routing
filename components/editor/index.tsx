"use client"
// InitializedMDXEditor.tsx
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  toolbarPlugin,
  ConditionalContents,
  ChangeCodeMirrorLanguage,
  UndoRedo,
  BoldItalicUnderlineToggles,
  ListsToggle,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  InsertCodeBlock,
  CreateLink,
  linkPlugin,
  linkDialogPlugin,
  tablePlugin,
  codeBlockPlugin,
  imagePlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
} from '@mdxeditor/editor'
import { string } from 'zod'
import {basicDark} from "cm6-theme-basic-dark"
import { useTheme } from 'next-themes'
import type { ForwardedRef } from 'react'
import '@mdxeditor/editor/style.css'
import "./dark-editor.css"
import React from 'react';
import { Separator } from '@radix-ui/react-dropdown-menu'


type Props = {
  value: string;
  fieldChange: (value: string) => void;
  editorRef: ForwardedRef<MDXEditorMethods> | null;
};

const Editor = ({value, editorRef, fieldChange, ...props}: Props) => {

  const { resolvedTheme } = useTheme();

  const theme = resolvedTheme === 'dark' ? [basicDark] : [];

    return (
    <MDXEditor
      key={resolvedTheme}
      markdown={value}
      ref={editorRef}
      className="background-light800_dark200 light-border-2 markdown-editor dark-editor w-full border"
      onChange={fieldChange}
      plugins={[
        // Example Plugin Usage
        headingsPlugin(),
        listsPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        tablePlugin(),
        imagePlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: ""}),
        codeMirrorPlugin ({
          codeBlockLanguages: {
            css: 'css',
            txt: 'txt',
            sql: 'sql',
            html: 'html',
            sass: 'sass',
            scss: 'scss',
            bash: 'bash',
            json: 'json',
            js: 'js',
            ts: 'ts',
            "": 'unspecified',
            tsx: 'TypeScript (React)',
            jsx: 'JavaScript (React)',       
         },
         autoLoadLanguageSupport: true,
         codeMirrorExtensions: theme,
        }),
        diffSourcePlugin({ viewMode: "rich-text" , diffMarkdown: ""}),

        toolbarPlugin({
          toolbarContents: () =>(
           <ConditionalContents
              options={[
                {
                  when: (editor) => editor?.editorType === 'codeblock',
                  contents: () => <ChangeCodeMirrorLanguage />
                },
                {
                  fallback: () => {
                    return (
                      <>
                        <UndoRedo />
                        <Separator />

                        <BoldItalicUnderlineToggles />
                        <Separator />

                        <ListsToggle />
                        <Separator />

                        <CreateLink />
                        <InsertImage />
                        <Separator />

                        <InsertTable  />
                        <InsertThematicBreak />

                        <InsertCodeBlock />
                      </>
                    );
                  }
                }
              ]}
            />
          )
      })
    ]}

      {...props}
            
    />
  )
}

export default Editor