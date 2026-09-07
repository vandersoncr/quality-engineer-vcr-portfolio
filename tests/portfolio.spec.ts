// *****************************************************************************
// *                  Developed by Vanderson Rodrigues - 2026
// *****************************************************************************

import { test, expect } from "@playwright/test";

test.describe("Portfólio profissional", () => {
    test("carrega identidade profissional", async ({ page }) => {
        await page.goto("/");

        await expect(
            page.getByRole("heading", { level: 1 })
        ).toContainText("Qualidade");

        await expect(
            page.getByTestId("experience-years")
        ).toContainText("5");

        await expect(
            page.getByTestId("experience-years")
        ).toContainText("Quality Engineering");
    });

    test("navegação leva aos projetos", async ({ page }) => {
        await page.goto("/");

        await page
            .getByRole("link", { name: /ver projetos/i })
            .click();

        await expect(page.locator("#projects")).toBeInViewport();
    });

    test("links profissionais são válidos", async ({ page }) => {
        await page.goto("/");

        const github = page
            .locator('a[href="https://github.com/vandersoncr"]:visible')
            .first();

        const linkedin = page
            .locator('a[href="https://linkedin.com/in/van-card07"]:visible')
            .first();

        await expect(github).toBeVisible();
        await expect(linkedin).toBeVisible();

        await expect(github).toHaveAttribute(
            "href",
            "https://github.com/vandersoncr"
        );

        await expect(linkedin).toHaveAttribute(
            "href",
            "https://linkedin.com/in/van-card07"
        );
    });

    test("cases técnicos são apresentados", async ({ page }) => {
        await page.goto("/");

        await expect(
            page.getByText("E2E Quality Architecture")
        ).toBeVisible();

        await expect(
            page.getByText("API & Integration Testing")
        ).toBeVisible();

        await expect(
            page.getByText("Performance Engineering")
        ).toBeVisible();
    });

    test("CTA de contato usa e-mail profissional", async ({ page }) => {
        await page.goto("/");

        const contactLink = page.locator(
            'a[href="mailto:vandersonqa08@gmail.com"]'
        ).first();

        await expect(contactLink).toBeVisible();

        await expect(contactLink).toHaveAttribute(
            "href",
            "mailto:vandersonqa08@gmail.com"
        );
    });
});