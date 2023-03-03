import NewFooter from "./components/Footer"
import { Navbar } from "./components/Navbar"

const sjef = [
  {
    name: 'REVYSJEFER',
    role: 'Nora, Ellie, Sylvester og Nicolas',
    imageUrl:
      'https://previews.dropbox.com/p/thumb/AB3hbK-AG4f3-LH7iZwJEIVFvf3at6xbM7TSnbZX-AserY8PcBsxCv1_Mg3y9rN1IujIpOfEflE83qCCA_FukuZB-UhNFMbsYCfHQFpE0KVwk86vDOa-yaa826M61ojmKSfbsjsEffZnXBqNuig8VtxbP5a--fXjJGm_wQsiTpQVNsyWllkthamjm6Nzj_Mm_q6tEme2ax79GAjkavo4A-KS5IngrMUU32Vd2c8bh6FgnHva7Rw6xTaT3xCWiWf0rQYJwS30iYxXH3v-F-vfSDVs475sv6a4g0v9IXhjpgXgzMJ96yD8uX-c3k7yJ8Y7UqqZXgVVp_jGhdtu-I3U7cjeYaeIyRXJhYBTN8Mp92WVTS9tnd1jnzMmzdBGm8IqnB4/p.jpeg',
  },
]

const people = [
    {
      name: 'SCENE',
      role: 'Mateo, Hennie & Kristian',
      imageUrl:
        'https://uc5c02181ee003cc2c16d07f107a.previews.dropboxusercontent.com/p/thumb/AB2UF_SE-PTqN7cBIJoYFeEb0x6TKJdOmbcZTM61ur75Nup4JSp8loSEr3D6_ZjH5i57fA4a9Z5_eqXLr8OvEge6tDVKvg4AdhNcOWbVh2qHMJAMviCc6gfHHuvvA96Muh_GBpCsPcI99udmrK4w2MAHNjIo9T0a496LmxvTUdvBbfKQTaKsn5jBISVJSmpwucENUvxrAxV9cCVDuYze870Jo49_Qp19kqT24ibnQS8tlU9dhWrVKeeufbkw_a0Mp40dNWzBr6be1zbdMkLZuZ1_r7s9uQGtPuqq0fUT19rWpnh7miFuoiIlQ52GvEGLvToYZGjeLbQhoTizJNieQAoq0dmar_lQLIgiimJkzPfP8_4KERS_Y6BrORZDJupOOvD-fSNby-ZFoZWMYOdIiv4kZWTWLZy9s0ttCiv3tgXrjA/p.jpeg',
    },
    {
      name: 'FEZT',
      role: 'Selma, Filip & Lisa',
      imageUrl:
        'https://previews.dropbox.com/p/thumb/AB2GJPprsoLSz_CZK7lGSwsO_0Wsk3Tf5qIJWeTKq4bQzJPddZW4lp5JYQxSREyAX_-P68p9iKNYG8j0c9wDdcWhEtzgqGjz_3zJV0vTZh6DBBlclmjaBM8XUGhJEVgDwoNJgZ96h2RgktMahfQX4FhFEtDJpxPigyhzIT78qqniHrJb1lFSURr3V1eoLXwq0dGI0kVuFkWkGSQPS9HLJ0qyHBE7WswEWgKCYyUJGCpYP3cmQoHvfwv9lfNQ2_O1aJocw__ZyE1pdtoaLAjesFzVRwtXHI3EoFJb1QsI-OOPMAxouBQB1ak2jalGakzcy-HTxKT09aBhc8EmPLuaecOPU_Ocw6BgvV6l8FGOTRUUfVRTM_96Pr6pZNC-ZR1ISCQ/p.jpeg',
    },
    {
      name: 'HÆNDY',
      role: 'Ena, Simen & Liza',
      imageUrl:
        'https://previews.dropbox.com/p/thumb/AB2bAltX1UaTcR7Bl7So6RxgyICaZT5colUkZHxPm6d-tMNwabpgOAxPMMkD96PuWIKOTHq_A2kDlvCsY_QBO6BUL3lbRygjskaQcXT-zddoBgUOBTiSj8NXnWB1Vn5OXynEgXNNPwNkdUcclSUi1JtL9TIUzst7d_JsxtymYB6dJaXcNmP_TAvtrLREaOQ4o-uerWHEhBAlG6XPF6e-hd80Vu804Cz5SDzhxTYNhYWi1A0_ujXMbLALBwa2XS2lPttn_Ek33_aNO4myrZhJCeT7onHt1ND4JnS9ozczV1oQGFUVpOsTEvX2p50R-UFEgcAH5SqsdmfEgAeVcgDWsabYLn6tsyvIX36-1eqIkovXQjj8hG9_Lh1qjNpgA8T3IJw/p.jpeg',
    },
    {
      name: 'KOSTYME',
      role: 'Gro, Olivia & Henry',
      imageUrl:
        'https://previews.dropbox.com/p/thumb/AB1r2H14PZg0hhPNqEFhmJH2tL8CayLZydLnZEY_wjuVRcOMMwkUf0Fy3wKxJFme0h98tsf9-Mo2XgJd9zE38TSS862c32I8tKu0sRSGTwHA8zqUE2q7n3Wht1GkiwGU5GBR7BdN0L9PCIuBoj5ZBwIWfBVzZIQrnyEB0LCXFCsG9X-8P3GcMnnFtFJwhkhCDUF-b3t9CutUXaHpy1-YGG5Hx-yU88C76qDOsVLLf_Ju1fnFRYAqATxIRTgGCi313-kPur7jlxdYAxWPrP-cobHk6_CqK4EqJ9Id_ZXR8E_EX_igocA3SCGzC7Q0JXlrEA2VM4po15Qb_S6TGPXscXepWQ9bcUkQ_pvLgmZQ1HxH7tkn6ZSqqp0RYZabOSNa6q0/p.jpeg',
    },
    {
      name: 'LYD OG LYS',
      role: 'Jesper, Stella & Théodore',
      imageUrl:
        'https://previews.dropbox.com/p/thumb/AB1i_bEx30hurZsoTOALFpWuQFRMh2NB-v34ee0cp7hSn0zojMQOmH4e6d8uMsmlGUQr7iZmLLCZCyuVvZkuBA9LxdRNSiH8nHb79elDFTcsmJORI9-MKoXLZTdPjbGBUC2EIYuT1CX9CXi9JiGuXEokUYWDvnwa1TzcKVnEixeWbJL68kPIrc7GRSYgqXODtEMvoR6KfkRCwEe2Mmd0YsrakUqTxdsXXl11D06jgS3NX9zHZVwAZj0osQh03wzmnKIH97I9qBqLHogrnHrhYaI0UvEZwvxFU0ukQJMzN2BJmbzZjm7ZkqrZB91whI7v0P1EsSVBt0DG3BFcWjbUrUMWpaEaYTPQIFTyIWKEwWg3yj5-1X_z2NVvIGg3eHctQJE/p.jpeg',
    },
    {
      name: 'MAT',
      role: 'Carmen, Håkon & Milla',
      imageUrl:
        'https://previews.dropbox.com/p/thumb/AB0kmDVuTd-2LnQlzVET5eAATg8jI0awMs68yp84XsFBCBSIUMmQaWm673RV-pXjOZMh-Gl37Gu_CGvH6DFpWl4qUdIpOL4l1o_-qJZGNEEu9Wg1vmlelITanZ9p8vJjA3ulVjay_cnWVmxYoHIYeBEAvh4caWzEGkbR2_gTBczSG1evlHy8pYHdNzQ_Z7g0uLZDN5k4yStGy9OhJs134ig0Bc5eISMpKa9bjcLaRdBtvu20IAApDIpV0go3g7XuYggNzgpkJ20y2lIRQRuCMHou-0h4qT0C2iP9sSoZVeg1rJs-jmclm2lF7n2zYT09H6UYB9dlsFlxrHq5MHyNL-8Onrf0fiEdc8MU0O2j9lNp9bmxyOesDVPAG43pbr4Yi1E/p.jpeg',
    },
    {
      name: 'MP',
      role: 'Maren, Edith & Eirill',
      imageUrl:
        'https://previews.dropbox.com/p/thumb/AB2xgGjgwh4_oEM5BnCK0qP9a8vo7vkVj493MGf9uZZbkTixYsIYmCA3ZhGED4jBLeMPiEiV72p3EgqBlct7NDW-zB20K7WPmzH-RYUMDglglMxAwaKq1nFqJpjhe6WbiLAuvTH6pRwoO41u4vH1ri4TluYAGTTCNSO4onmsUSEIypaxIfw9K6Kf8jwXm3VmyiHFsGBMhrsd2VqBJFHrF79miBO4tJsfboKLleev78mtJJ5WQPLCPEvsxAgOvAK7SHm9atSSL3Vi_1OpATZox-pxmQO8tXflywUhQJAyUXFyBvBDcE0tQdJcAxHErnsOFovZsre6dCS83rw2fTS4_4FOzCYCQPdJBRizJV8WpAOOmroXLuK7sS1Yp6bHChI_Rtw/p.jpeg',
    },
    {
      name: 'PR',
      role: 'Ingrid, Max & Emeli',
      imageUrl:
        'https://previews.dropbox.com/p/thumb/AB0P1tY9hjQc5y0qimkYkVXohmtVZVI3DX66led0EIvIBRmSArTFOuxhQNftkDaEVXrQ0oHHhiacvW8jjVteJ-Dq0KlD8hMlu9CLKkUiqPfGSxSGaO72y0DTwV_M4c4Zb_mRB2DGupe4aHw-b2XE46ul-tj6WM4X4vrh6fCxafPZRImtNoyMvw3VsqWt2CfvMYzxGdAsTk9oZsHBJS86HBTlpbY2W2YAFqv1VUmPSlVw0005I4Civv00G39mTLnQDOC4poUL4xDVC3WLfe1rVZ_KONZ3D_9J_bNPMWkYz_s1PA34MVVca5xqPKfIBR4E8W8Kkwc-Hn6SPlyJJw6Gx5uxDdPf2bUeef-7TPjP6MjgRcjE2oA5QhNVqekDLATf9cE/p.jpeg',
    },
    {
      name: 'SØPPEL',
      role: 'Maria',
      imageUrl:
        'https://previews.dropbox.com/p/thumb/AB2o4dQdmGZXlfdKqEzzHLIfnv3cfyWJ_-G6NPFP_0Tkg6af-YKkoxVMxGqPkNqbIYypU2gm1GF4Gxs5i9JpLEsvdJ55Tu1lLnetWq6vwHp3f_Gfm8J0TDFAJ-8cP12QGldT1CydoWe1C2LnyOLLwF52O0ONrGf84aHungZdaBhnwi5GVUgNKHMaA9aX1HwOKsYZbYLc_pKk-4xhBRN6i3Xn0-sWJUDn9bnqXeXGdo1bDyIE5nLv53VmJvHyvyVPlX0zIHY82f2KAHRv9s9PU4BbCTwNNno0-3uXQCtGJXbtPLh6w30imwRn42xCy6I2NHgJDsnSjjN-MugQ-MdVgRxcxAPcbRW76OrZC1jAfZOnBoSWWYe9CQkKT38AcjdQzt8/p.jpeg',
    },
  ]

const groups = [
    {
      name: 'SCENE',
      role: 'Når lysene slukkes og musikken starter, smelter verden bort og man er igjen med kun deg, scenen, rekvisittene og kulturen. Det er der lidenskapelige kunstnere går ut av sin komfortsone og skaper noe som aldri før har eksistert - for the culture!',
      imageUrl:
        'https://previews.dropbox.com/p/thumb/AB2bgNVEtsF95aYcvAhviEf8-QC_ZORcBOXe7XWWsz3ryBc5jIy_h4BJHikA6iWGobaPfLRRJ05RWb7WHv2Iydr_jk6FN-BuaJsDLw0ESsENrBm1PnKGUneS0JJrm075UpYP03HKYJLK9sscn0ElZVzm2EgcZLoCKCgvRYNTtAAFy4qTAq2xwHiVZI2U7ABswCgcWy2ZAFd-01_m95L9QoCTHTmjt3qvmyu5DCaI3b27BKYf7k4ewawrPlWZSo6qCpHG0r0xSqrYDH7KSpI8hTaxBCcIFOF34my3rSoKxo6OZ4IeY2NWeg97QaCcgU4kPJfykCeyk6QeJTP_E3AwgaL1IC_k1kdRnUFin5M-534h9439taFI-XGEUHd5bU9XfTo/p.jpeg',
    },
    {
      name: 'FEZT',
      role: 'Party culture all the way, that is why we always slay! For the CULT.',
      imageUrl:
        'https://previews.dropbox.com/p/thumb/AB3VYPwzjLJ-z1a_AzVdkPWannjwxyTi3Xo584na2s1JXX4gDSzLaT61YEPD0NPrYlkD232bo6FpG_PLJgtwJGAYIrRK23F8qSwfXTm67qsFrBaFa6tEB0renLrfmZJUJQ57VYH8XNhF8jQ7v-9Udd1Hk0qcLtbOUlYgqBZ_eLv4FlTpiWz1G5HB60iL6oQbM2LtwNx245XLvxzhohi16Re3jkjtNxa9wgz20netxSuRZs4x5Esc1LwuTF0Mg3zUudzU7LHvDVBWMPzUJMiqOHSUWnE_RxuICm-lHh1u3Jv3lgCBdfR-CKnJJUScepseSGraS4BoCYkjFJ-8xueTnhWhwRukS4orFLbNkgxu1ngwVCjfqJ-OhRmzlr0rQ0kq1mc/p.jpeg',
    },
    {
      name: 'HÆNDY',
      role: 'Kan kulturen bygges? Klart Hændy kan!',
      imageUrl:
        'https://previews.dropbox.com/p/thumb/AB29aEOTl43IsZhn1zS1763iiJl_orL55-qJYdiKrM1aUJQ57K3eU8x138unyUruHCkriBEOZeDGbwDnrPTP_V7N45VKtxW7VT5nK_4_05zMKKfph5RG8IxNH-if9Up5tULz5UArIj2nLPwXYjFC50MC-tarXD-GmNQ9jcQwB1nBzWwUMhpH_WqDxowDBMk_xxzMCfqtsYq4ugWh7lXmCqyjwLvpAzpY142TV3d164Tr3wDXWAdS_92WmTA0ft1mpqsUnypgSD_lonx48sGG_8-htwJyoAXKwrvvwYZugzeEVbtFZm6HKXfhTSAecD7SVzsSX36D9FOUsA2SlOqtecGwxxXQDfip2Nu-9DbT5f2f38jJKKGXTqF8-qsE1bT7BuM/p.jpeg',
    },
    {
      name: 'KOSTYME',
      role: 'Haha de mente vel for the costumes',
      imageUrl:
        'https://previews.dropbox.com/p/thumb/AB339qFMs5fTeKXjFREtepcYmSuRyqhrvHZBrP2ACDOVkRp9oo3cfTwgGPeqVYsqoRy4JAj5WsC2Sp97t1pJj9NT84M8ltbtctCdzqjzHDPSfFJSIqjK9Fn3IXnOb-lEY-3fKQ22lgYFR-QyA8rU08o3JUCB5vDrnT2_dDEHWBlseJ2g2H2oAEq__QdvNvvXXe7RB-zH93wt5P-lakcaGm6hP3vYlr9y-KHrbYrclzLV42E0tFiDaToI9Yz4HrpGhadcctfy0FXJ6ZIqNKXbOIx-O79GbtQ4St-9Y0YqfrawIdrGDE0WkxCaytI4TGLbX_GdWFqO-jC9yN8DvOIblPW3_ASBshLRs15GYModFFvo_Egu2ifHDBZ5uHlw1oxbrZY/p.jpeg',
    },
    {
      name: 'LYD OG LYS',
      role: 'Kall oss sjeiker fordi vi regjerer Audi-Arabia',
      imageUrl:
        'https://previews.dropbox.com/p/thumb/AB36f0pc6qS-jHwDhUzRkt6GJOoMF4t9Ix5QpMlYxDEL43O43OuYfMqkurTPx0SqiOr__Qsd6ILQ_tjMERJvNyap4ZUxZ2-rNsBS3bmPqIsSDulJGZ4CuVC_F6KTbxJYJiQ6tKrPn0qpAwZtnGB-Lzz6SYEPBv8ooT3viSINNLkafiLY7F_c9kHSS_D12cFGOKoYwYtWOwTgJ0perdXzBno_9syTH_sVhlOZBOX8nD7kJ7enUNqUd0-FG6A9Xw7zH56SGUbvEvrYlIJdLAPBPLr4W1WmtTKEIyesB5XjlnGTTKy3yneLRRt7R02g57GoaT5ebKfc9j8RpWQE7DnOOdentL0gw50jeqwSaClVbkimj0FJPIUZ1YpmgggMTc6J6vg/p.jpeg',
    },
    {
      name: 'MAT',
      role: 'Food for thought, thought for culture, food for culture, FOR THE CULTUREr',
      imageUrl:
        'https://previews.dropbox.com/p/thumb/AB3GTYin5_X85jOb2_wsGfMMuYnumhwv0Q5VlclF_18Z-UAYmqgOuIIpx3yDhmt5_dJ5UzI6gCGHNX-ACuw2fpyhT2LDhBjllbpTaubYxxRj1a8ntgQ5q_CfgfHQY5asiGE4HfeCloiXhLNzQW85mwTIRq2M-_Zuw0VyulHNJwEDyk5l54jKahpf1GR8g2NHH0KXb2AvRzBDEmThZhE0wctKAXvv-SRpeJCS3b_WvSPaHofcjP-a19tDKjOHdTZ0NDAE6ctlFBN6Ivs1Abk_lY1EuHtWBfdWcvqEfiQC8fTJIZ22n3skx1vgPj0cM_LHzgZEoYdnNyR1Izx30pGit3hvSKegGGf5Txxu_zxBecN5MbemjYktAstTwRwuIn3z9Gw/p.jpeg',
    },
    {
      name: 'MP',
      role: 'If you dont know me im M to the P',
      imageUrl:
        'https://previews.dropbox.com/p/thumb/AB3EhXoPR95GV6GRCRhra_AXElLf1u88xqwLYP-Xvn1wuFaehkbqBqDjJH9-MNUcPjZEwXmDjjyZjxbkKUNjpCQk8VXQ_6y1Tk3GIGt87o0Wzl-YnqqyadkBDt68_-2fC_syF3eFW2FeaHdrt7Os8L9Y_L0iNf1afJlulSSQEGDUPP2Eh3G0RFkyxR1viEN-zvIoDjMOaLqADGY9NvU92y0awvSEorG9wqHCEewlB6CZI0_zgsOn4cT3LTWkCEAKSFYlybtmINrlku1RxJrZi2urdAHJ9OwSNijeRMouTfKfiPlCEx5VtqOau5n4tN5USQPJ60e07lEMcn8mJoY-8MnLrRLrFHsA3Lm1hjAHqqIQwHaRvV1d_LR07oIIm1nWdtc/p.jpeg',
    },
    {
      name: 'PR',
      role: 'Alle forguder oss, og vi forguder bikkja;)',
      imageUrl:
        'https://previews.dropbox.com/p/thumb/AB2k86A1LGl4a1LUQO3DThzlluPC2qwwNrPW8XPT1iFWJJF7f6YgiR1jlKbaNxvRY7riJWAmGHWbXl-m8sjQ0WdX3SYDT2lXRNVo3V9Noh8KwdiI9EoTgpMhidGhRe61VGPIdirtKuCpWNzHGL9McfVhOopeaO7XPpBIdugDWQeKnaNYsDnrYl8fQrmxgIfP-fj-XUw9ynkxvbLh3ELwX7Q4FxIcHE1SUT32lLf-hZbPIi-2--Tr-g96NuPTsZNle39yamBoYWYQYL90fO8J38w5-sYNd8PsIZk2fSdWWqoDE3cNtJnYetXnYOqvZ73YJluG91zh4MKBfRTJS75nccmrFUeGQr7T0vL731LdmebOm-G9dDnDz4GgdBm1c2CqNKM/p.jpeg',
    },
]
  
  export default function Groups() {
    return (
        <div className="isolate h-full bg-amber-100">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#65000a" />
              <stop offset={1} stopColor="#9f0014" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Navbar />
      {/* Revysjefer */}
      <div className="py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Revysjefer</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                På denne nettsiden kan du se gruppebilder av både sjefer og medlemmer, og få et innblikk i den fantastiske gruppen som står bak årets revyproduksjon
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {sjef.map((person) => (
              <li key={person.name}>
                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Gruppesjefer */}
      <div className="-mt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gruppesjefer</h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Grupper */}
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Grupper</h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {groups.map((person) => (
              <li key={person.name}>
                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    )
  }
  